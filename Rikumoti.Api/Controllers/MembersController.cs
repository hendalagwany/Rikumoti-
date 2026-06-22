using Microsoft.AspNetCore.Mvc;
using Rikumoti.Api.Data;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class MembersController : ControllerBase
{
    private readonly AppDbContext _context;
    public MembersController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetMembers()
    {
        var members = await _context.Members.ToListAsync();

        return Ok(members);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetMember(string id)
    {
        var member = await _context.Members
        .FirstOrDefaultAsync(m => m.Id == id);

        if (member == null)
        {
            return NotFound();
        }

        return Ok(member);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateMember(string id, Member updatedMember)
    {
        var member = await _context.Members
        .FirstOrDefaultAsync(m => m.Id == id);

        if (member == null)
        {
            return NotFound();
        } 

        member.Name = updatedMember.Name;
        member.Image = updatedMember.Image;
        member.DetailsImg = updatedMember.DetailsImg;
        member.Age = updatedMember.Age;
        member.Instrument = updatedMember.Instrument;
        member.InstrumentIcon = updatedMember.InstrumentIcon;
        member.Color = updatedMember.Color;
        member.SecondaryColor = updatedMember.SecondaryColor;
        member.Hobby = updatedMember.Hobby;
        member.Pin = updatedMember.Pin;
        member.FavoriteFood = updatedMember.FavoriteFood;
        member.FavoriteDrink = updatedMember.FavoriteDrink;
        member.FavoriteColor = updatedMember.FavoriteColor;
        member.Birthday = updatedMember.Birthday;
        member.Quote = updatedMember.Quote;
        member.Bio = updatedMember.Bio;
        member.Tagline = updatedMember.Tagline;
        member.ClassName = updatedMember.ClassName;

        await _context.SaveChangesAsync();

        return Ok(member);
    }
}
