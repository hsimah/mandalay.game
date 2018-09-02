using System.Collections.Generic;
using Newtonsoft.Json;

namespace Games.Core.Models
{
    public class Player
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "score")]
        public int Score { get; set; }
        [JsonIgnore]
        public virtual IEnumerable<Card> Cards { get; set; }
    }
}
