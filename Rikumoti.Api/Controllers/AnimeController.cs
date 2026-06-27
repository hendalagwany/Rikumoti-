using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;
namespace Rikumoti.Api.Controllers;

using Rikumoti.Api.Data;

[ApiController]
[Route("api/[controller]")]
public class AnimeController : ControllerBase
{
    private readonly AppDbContext _context;

    public AnimeController(AppDbContext context)
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
    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatedAnime(
        string id,
        [FromBody] AnimeProject updatedAnime)
    {
        var anime = _context.Anime
        .FirstOrDefault(a => a.Id == id);


        if (anime == null)
        {
            return NotFound();
        }

        anime.Title = updatedAnime.Title;
        anime.Role = updatedAnime.Role;
        anime.Year = updatedAnime.Year;
        anime.Image = updatedAnime.Image;
        anime.Description = updatedAnime.Description;
        anime.Episodes = updatedAnime.Episodes;
        anime.Status = updatedAnime.Status;
        anime.Season = updatedAnime.Season;
        anime.Genre = updatedAnime.Genre;
        anime.Studio = updatedAnime.Studio;
        anime.ContributionType = updatedAnime.ContributionType;
        anime.MainMember = updatedAnime.MainMember;
        anime.MembersInvolved=updatedAnime.MembersInvolved;
        anime.PopularityRank = updatedAnime.PopularityRank;
        anime.Story = updatedAnime.Story;

        await _context.SaveChangesAsync();

        return Ok(anime);

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> Deleteanime(string id)
    {
        var anime = await _context.Anime.FindAsync(id);

        if (anime == null)
        {
            return NotFound();
        }

        _context.Anime.Remove(anime);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> Createanime(
        [FromBody] AnimeProject anime
        )
    {
        anime.Id = Guid.NewGuid().ToString();

        _context.Anime.Add(anime);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetAnime),
            new { id = anime.Id },
             anime
             );
    }

}
