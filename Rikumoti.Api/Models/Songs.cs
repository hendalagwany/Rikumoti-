namespace Rikumoti.Api.Models;

public class Songs
{
    public string Id { get; set; } = Guid.NewGuid().ToString();

    public string Title { get; set; } = "";
    public string Audio { get; set; } = "";
    public string Cover { get; set; } = "";
    public string Singer { get; set; } = "";

    public string Album { get; set; } = "";
    public string Genre { get; set; } = "";

    public DateTime ReleaseDate { get; set; }

    public TimeSpan Duration { get; set; }

    public bool IsFeatured { get; set; }

    public string Anime { get; set; } = "";
    public string Role { get; set; } = "";
}