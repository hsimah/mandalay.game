using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;
using Microsoft.Azure.Documents;

namespace Games.Core.Interfaces
{
    public interface IClient<T> where T : IModel
    {
        Task<Document> CreateItemAsync(T item);

        Task<IEnumerable<T>> GetItemsAsync(Expression<Func<T, bool>> predicate);

        Task<T> GetItemAsync(int id);
    }
}
