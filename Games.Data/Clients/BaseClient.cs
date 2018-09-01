using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Games.Core.Interfaces;
using Games.Core.Settings;
using Microsoft.Azure.Documents;
using Microsoft.Azure.Documents.Client;
using Microsoft.Azure.Documents.Linq;
using Microsoft.Extensions.Options;

namespace Games.Data.Clients
{
    public abstract class BaseClient<T> : IClient<T> where T : IModel
    {
        private readonly DocumentClient client;
        private readonly AppSettings settings;
        protected virtual string CollectionId => "base";
        public BaseClient(IOptions<AppSettings> settingsOptions)
        {
            settings = settingsOptions.Value;
            client = new DocumentClient(new Uri(settings.ServiceEndpoint), settings.AuthKey);
            client.CreateDatabaseIfNotExistsAsync(new Database() { Id = settings.DatabaseId });
            client.CreateDocumentCollectionAsync(UriFactory.CreateDatabaseUri(settings.DatabaseId),
                        new DocumentCollection { Id = CollectionId },
                        new RequestOptions { OfferThroughput = 1000 });
        }

        public virtual async Task<Document> CreateItemAsync(T item)
        {
            item.Id = Guid.NewGuid();
            return await client.CreateDocumentAsync(UriFactory.CreateDocumentCollectionUri(settings.DatabaseId, CollectionId), item);
        }

        public virtual async Task<IEnumerable<T>> GetItemsAsync(Expression<Func<T, bool>> predicate)
        {
            IDocumentQuery<T> query = client.CreateDocumentQuery<T>(
                UriFactory.CreateDocumentCollectionUri(settings.DatabaseId, CollectionId))
                .Where(predicate)
                .AsDocumentQuery();

            List<T> results = new List<T>();
            while (query.HasMoreResults)
            {
                results.AddRange(await query.ExecuteNextAsync<T>());
            }

            return results;
        }

        public virtual async Task<T> GetItemAsync(Guid id)
        {
            IEnumerable<T> items = await GetItemsAsync(i => i.Id == id);
            return items.FirstOrDefault();
        }
    }
}
