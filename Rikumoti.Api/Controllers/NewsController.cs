using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;
using Rikumoti.Api.Data;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class NewsController : ControllerBase
{
    private readonly AppDbContext _context;

    public NewsController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public async Task<IActionResult> GetNews()
    {
        var news = await _context.News.ToListAsync();
        return Ok(news);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetNewsItem(string id)
    {
        var newsItem = await _context.News.FindAsync(id);

        if (newsItem == null)
        {
            return NotFound();
        }

        return Ok(newsItem);
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateNews(
        string id,
        [FromBody] News updatedNews)
    {
        var newsItem = await _context.News
        .FirstOrDefaultAsync(n => n.Id == id);

        if (newsItem == null)
        {
            return NotFound();
        }

        newsItem.Title = updatedNews.Title;
        newsItem.Image = updatedNews.Image;
        newsItem.Date = updatedNews.Date;
        newsItem.Description = updatedNews.Description;
        newsItem.Category = updatedNews.Category;
        newsItem.Member = updatedNews.Member;
        newsItem.Anime = updatedNews.Anime;
        newsItem.Role = updatedNews.Role;
        newsItem.Author = updatedNews.Author;
        newsItem.Featured = updatedNews.Featured;
        newsItem.Tags = updatedNews.Tags;

        await _context.SaveChangesAsync();

        return Ok(newsItem);

    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteNews(string id)
    {
        var newsItem = await _context.News.FindAsync(id);

        if (newsItem == null)
        {
            return NotFound();
        }

        _context.News.Remove(newsItem);

        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPost]
    public async Task<IActionResult> CreateNews([FromBody] News news)
    {
        news.Id =Guid.NewGuid().ToString();
        
        _context.News.Add(news);

        await _context.SaveChangesAsync();

        return CreatedAtAction(
            nameof(GetNewsItem),
            new { id = news.Id },
            news
        );
    }
}
