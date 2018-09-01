using Games.Core.Models;
using Games.Core.Settings;
using Microsoft.Extensions.Options;

namespace Games.Data.Clients
{
    public class RoundClient : BaseClient<Round>
    {
        protected override string CollectionId => "rounds";

        public RoundClient(IOptions<AppSettings> settingsOptions) : base(settingsOptions) { }
    }
}
