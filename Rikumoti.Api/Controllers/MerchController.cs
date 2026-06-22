using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Rikumoti.Api.Controllers;

using Rikumoti.Api.Data;

[ApiController]
[Route("api/[controller]")]
public class MerchController : ControllerBase
{
    private readonly AppDbContext _context;
    public MerchController(AppDbContext context)
    {
        _context = context;
    }
    [HttpGet]
    public async Task<IActionResult> GetMerch()
    {
        var merch = await _context.Merch.ToListAsync();

        return Ok(merch);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMerchItem(string id)
    {
        var MerchItem =  await _context.Merch.FindAsync(id);

        if (MerchItem == null)
        {
            return NotFound();
        }

        return Ok(MerchItem);
    }
}
