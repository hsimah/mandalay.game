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
    public class RoundController : ControllerBase
    {
        private readonly IClient<Round> _client;
        public RoundController(IClient<Round> client)
        {
            _client = client;
        }

        // GET: api/Round
        [HttpGet]
        public async Task<IEnumerable<Round>> GetAllAsync()
        {
            return await _client.GetItemsAsync(c => true);
        }

        // GET: api/Round/5
        [HttpGet("{id}", Name = "GetRound")]
        public async Task<Round> GetAsync(Guid id)
        {
            return await _client.GetItemAsync(id);
        }

        // POST: api/Round
        [HttpPost]
        public void Post([FromBody] Round value)
        {
            _client.CreateItemAsync(value);
        }
    }
}
