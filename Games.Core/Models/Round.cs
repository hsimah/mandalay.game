using System;
using System.Collections.Generic;
using System.Linq;
using Games.Core.Interfaces;

namespace Games.Core.Models
{
    public class Round : IModel
    {
        public int Id { get; set; }
        public DateTime Timestamp { get; set; }
        public int WinnerId { get; set; }
        public Player Winner { get => Players.Single(p => p.Id == WinnerId); }
        public IEnumerable<Player> Players { get; set; }
    }
}
