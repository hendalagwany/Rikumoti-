public class AnimeProject
{
    public string Id { get; set; } = "";
    public string Title { get; set; } = "";
    public string Role { get; set; } = "";
    public int Year { get; set; }
    public string Image { get; set; } = "";
    public string Description { get; set; } = "";
    public int Episodes { get; set; }
    public string Status { get; set; } = "";
    public string Season { get; set; } = "";

    public List<string> Genre { get; set; } = [];

    public string Studio { get; set; } = "";
    public string ContributionType { get; set; } = "";

    public List<string> MembersInvolved { get; set; } = [];

    public string MainMember { get; set; } = "";
    public int PopularityRank { get; set; }

    public string Story { get; set; } = "";
}