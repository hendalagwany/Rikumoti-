namespace Rikumoti.Api.Models;

public class News
{
    public string Id { get; set; } = "";
    public string Title { get; set; } = "";
    public string Date { get; set; } = "";
    public string Image { get; set; } = "";
    public string Description { get; set; } = "";
    public string Category { get; set; } = "";
    public string Member { get; set; } = "";
    public string? Anime { get; set; }
    public string? Role { get; set; }
    public string Author { get; set; } = "";
    public bool Featured { get; set; }
    public List<string> Tags { get; set; } = [];
}