using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Rikumoti.Api.Controllers;

using Rikumoti.Api.Data;

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
}
