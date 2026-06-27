using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;
namespace Rikumoti.Api.Controllers;

using Rikumoti.Api.Data;

[ApiController]
[Route("api/[controller]")]
public class VoiceActingController : ControllerBase
{
    private readonly AppDbContext _context;
    public VoiceActingController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetVoiceActing()
    {
        var voiceacting = await _context.VoiceActingProject.ToListAsync();

        return Ok(voiceacting);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetVoiceActing(string id)
    {
        var voiceActingProject = await _context.VoiceActingProject.FindAsync(id);

        if (voiceActingProject == null)
        {
            return NotFound();
        }

        return Ok(voiceActingProject);
    }

    [HttpPut("{id}")] 
    public async Task<IActionResult> UpdatedVoiceActing(
        string id,
         [FromBody] VoiceActingProject updateVoiceActing)
    {
        var voiceActing = _context.VoiceActingProject
        .FirstOrDefault(v => v.Id == id);

        if (voiceActing == null)
        {
            return NotFound();
        }

        voiceActing.Member = updateVoiceActing.Member;
        voiceActing.Character = updateVoiceActing.Character;
        voiceActing.Anime = updateVoiceActing.Anime;
        voiceActing.Image = updateVoiceActing.Image;
        voiceActing.Description = updateVoiceActing.Description;
        voiceActing.Year = updateVoiceActing.Year;
        voiceActing.Season = updateVoiceActing.Season;
        voiceActing.Genre = updateVoiceActing.Genre;
        voiceActing.Episodes = updateVoiceActing.Episodes;
        voiceActing.RoleType = updateVoiceActing.RoleType;
        voiceActing.Studio = updateVoiceActing.Studio;
        voiceActing.CharacterAge = updateVoiceActing.CharacterAge;
        voiceActing.SampleQuote = updateVoiceActing.SampleQuote;
        voiceActing.FanFavorite = updateVoiceActing.FanFavorite;
        voiceActing.CharacterColor = updateVoiceActing.CharacterColor;
        voiceActing.Status = updateVoiceActing.Status;
        voiceActing.Audio = updateVoiceActing.Audio;

        await _context.SaveChangesAsync();

        return Ok(voiceActing);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteVoiceActing(string id)
    {
        var voiceActing = await _context.VoiceActingProject.FindAsync(id);

        if (voiceActing == null)
        {
            return NotFound();
        }

        _context.VoiceActingProject.Remove(voiceActing);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> CreateVoiceActing(
        [FromBody] VoiceActingProject VoiceActing
        )
    {
        VoiceActing.Id = Guid.NewGuid().ToString();

        _context.VoiceActingProject.Add(VoiceActing);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetVoiceActing),
            new { id = VoiceActing.Id },
             VoiceActing
             );
    }
}
