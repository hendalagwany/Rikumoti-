using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;
using Rikumoti.Api.Data;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MusicController : ControllerBase
{
    private readonly AppDbContext _context;
    public MusicController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetMusic()
    {
        var music = await _context.Music.ToListAsync();

        return Ok(music);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMusic(string id)
    {
        var song = await _context.Music.FindAsync(id);

        if (song == null)
        {
            return NotFound();
        }

        return Ok(song);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateSong(string id, [FromBody] Song updateSong)
    {
        var song = await _context.Song
        .FirstOrDefaultAsync(s => s.Id == id);
    }
}

