using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Games.Core.Interfaces;
using Games.Core.Models;
using Microsoft.AspNetCore.Mvc;

namespace Games.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private readonly IClient<Card> _client;
        public CardController(IClient<Card> client)
        {
            _client = client;
        }

        // GET: api/Card
        [HttpGet]
        public async Task<IEnumerable<Card>> GetAllAsync()
        {
            return await _client.GetItemsAsync(c => true);
        }

        // GET: api/Card/5
        [HttpGet("{id}", Name = "GetCard")]
        public async Task<Card> GetAsync(Guid id)
        {
            return await _client.GetItemAsync(id);
        }
    }
}
