using System;
using Games.Core.Interfaces;
using Newtonsoft.Json;

namespace Games.Core.Models
{
    public class Card : IModel
    {
        [JsonProperty(PropertyName = "id")]
        public Guid Id { get; set; }
        [JsonProperty(PropertyName = "suit")]
        public string Suit { get; set; }
        [JsonProperty(PropertyName = "rank")]
        public string Rank { get; set; }
        [JsonProperty(PropertyName = "value")]
        public int Value { get; set; }
    }
}
