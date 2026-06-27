using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;
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
        var MerchItem = await _context.Merch.FindAsync(id);

        if (MerchItem == null)
        {
            return NotFound();
        }

        return Ok(MerchItem);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdatedMerch(
        string id,
        [FromBody] MerchItem updatedMerch)
    {
        var merch = _context.Merch
        .FirstOrDefault(a => a.Id == id);


        if (merch == null)
        {
            return NotFound();
        }

        merch.Name = updatedMerch.Name;
        merch.Category = updatedMerch.Category;
        merch.Price = updatedMerch.Price;
        merch.Image = updatedMerch.Image;
        merch.Description = updatedMerch.Description;
        merch.Stock = updatedMerch.Stock;
        merch.ReleaseDate = updatedMerch.ReleaseDate;


        await _context.SaveChangesAsync();

        return Ok(merch);

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMerch(string id)
    {
        var merch = await _context.Merch.FindAsync(id);

        if (merch == null)
        {
            return NotFound();
        }

        _context.Merch.Remove(merch);
        await _context.SaveChangesAsync();
        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> CreateMerch(
        [FromBody] MerchItem merch
        )
    {
        merch.Id = Guid.NewGuid().ToString();

        _context.Merch.Add(merch);
        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetMerch),
            new { id = merch.Id },
             merch
             );
    }

}
