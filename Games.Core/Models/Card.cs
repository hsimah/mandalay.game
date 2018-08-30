using Games.Core.Enums;
using Games.Core.Interfaces;

namespace Games.Core.Models
{
    public class Card : IModel
    {
        public int Id { get; set; }
        public Suits Suit { get; set; }
        public string Rank { get; set; }
        public int Value { get; set; }
    }
}
