using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

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
        var voiceacting = await _context.VoiceActing.ToListAsync();

        return Ok(voiceacting);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetVoiceActing(string id)
    {
        var voiceActingProject = await _context.VoiceActing.FindAsync(id);

        if (voiceActingProject == null)
        {
            return NotFound();
        }

        return Ok(voiceActingProject);
    }
}
