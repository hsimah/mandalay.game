using System.Collections.Generic;
using Games.Core.Interfaces;

namespace Games.Core.Models
{
    public class Player : IModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int Score { get; set; }
        public virtual IEnumerable<Card> Hand { get; set; }
    }
}
