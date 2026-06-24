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
        var music = await _context.Songs.ToListAsync();

        return Ok(music);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMusic(string id)
    {
        var song = await _context.Songs.FindAsync(id);

        if (song == null)
        {
            return NotFound();
        }

        return Ok(song);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatedSong(string id, [FromBody] Songs updatedSong)
    {
        var song = await _context.Songs
        .FirstOrDefaultAsync(s => s.Id == id);

        if (song == null)
        { 
            return NotFound();
        }

        song.Title = updatedSong.Title;
        song.Audio = updatedSong.Audio;
        song.Cover = updatedSong.Cover;
        song.Singer = updatedSong.Singer;
        song.Album = updatedSong.Album;
        song.Genre = updatedSong.Genre;
        song.ReleaseDate = updatedSong.ReleaseDate;
        song.Duration = updatedSong.Duration;
        song.IsFeatured = updatedSong.IsFeatured;
        song.Anime = updatedSong.Anime;
        song.Role = updatedSong.Role;

        await _context.SaveChangesAsync();

        return Ok(song);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteSong(string id)
    {
        var song = await _context.Songs.FindAsync(id);

        if (song == null)
        {
            return NotFound();
        }
        
        _context.Songs.Remove(song);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> CreateSong([FromBody] Songs song)
    {
        song.Id = Guid.NewGuid().ToString();

        _context.Songs.Add(song);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetMusic),
            new { id = song.Id },
            song
        );
    }
}

