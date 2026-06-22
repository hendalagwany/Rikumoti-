using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Rikumoti.Api.Controllers;

using Rikumoti.Api.Data;

[ApiController]
[Route("api/[controller]")]
public class AnimeController : ControllerBase
{
    private readonly AppDbContext _context;

    public AnimeController (AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetAnime()
    {
        var anime = await _context.Anime.ToListAsync();
        return Ok(anime);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetAnimeProject(string id)
    {
        var animeProject = await _context.Anime.FindAsync(id);

        if (animeProject == null)
        {
            return NotFound();
        }

        return Ok(animeProject);
    }
}
