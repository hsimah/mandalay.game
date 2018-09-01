using System;
using System.Collections.Generic;
using Games.Core.Interfaces;
using Newtonsoft.Json;

namespace Games.Core.Models
{
    public class Round : IModel
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "timestamp")]
        public DateTime Timestamp { get; set; }
        [JsonProperty(PropertyName = "winner")]
        public Player Winner { get; set; }
        [JsonIgnore]
        public IEnumerable<Player> Players { get; set; }
        [JsonProperty(PropertyName = "wildcard")]
        public Card Wildcard { get; set; }
    }
}
