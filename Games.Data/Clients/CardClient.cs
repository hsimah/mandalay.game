using Games.Core.Models;
using Games.Core.Settings;
using Microsoft.Extensions.Options;

namespace Games.Data.Clients
{
    public class CardClient : BaseClient<Card>
    {
        protected override string CollectionId => "cards";

        public CardClient(IOptions<AppSettings> settingsOptions) : base(settingsOptions) { }
    }
}
