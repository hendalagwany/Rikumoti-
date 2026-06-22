namespace Rikumoti.Api.Models;

public class VoiceActingProject
{
    public string Id { get; set; } = "";
    public string Member { get; set; } = "";
    public string Character { get; set; } = "";
    public string Anime { get; set; } = "";
    public string Image { get; set; } = "";
    public string Description { get; set; } = "";

    public int Year { get; set; }
    public string Season { get; set; } = "";

    public List<string> Genre { get; set; } = [];

    public int Episodes { get; set; }

    public string RoleType { get; set; } = "";

    public string Studio { get; set; } = "";

    public int CharacterAge { get; set; }

    public string SampleQuote { get; set; } = "";

    public bool FanFavorite { get; set; }

    public string CharacterColor { get; set; } = "";

    public string Status { get; set; } = "";

    public string? Audio { get; set; }
}