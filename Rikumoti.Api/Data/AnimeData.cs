using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public static class AnimeData
{
    public static List<AnimeProject> Anime = new()
    {
        new AnimeProject
    {
        Id = "1",
        Title = "Dream Melody",
        Role = "Opening Theme",
        Year = 2026,
        Image = "/images/anime/anime1.png",
        Description = "Rikumoti performed the opening song for the anime Dream Melody.",
        Episodes = 12,
        Status = "Completed",
        Season = "Spring 2026",
        Genre = ["Music", "Drama", "School"],
        Studio = "StarLight Animation",
        ContributionType = "Opening Theme",
        MembersInvolved = ["Rikumoti"],
        MainMember = "Rikumoti",
        PopularityRank = 2,
        Story = "A group of students discover their passion for music and form a band that changes their lives."
    },

    new AnimeProject
    {
        Id = "2",
        Title = "Sky Letters",
        Role = "Ending Theme",
        Year = 2025,
        Image = "/images/anime/anime2.png",
        Description = "A soft emotional ending theme performed by Myuki and Riku.",
        Episodes = 13,
        Status = "Completed",
        Season = "Fall 2025",
        Genre = ["Romance", "Drama"],
        Studio = "Blue Horizon Studio",
        ContributionType = "Ending Theme",
        MembersInvolved = ["Myuki", "Riku"],
        MainMember = "Myuki",
        PopularityRank = 4,
        Story = "Two distant souls communicate through mysterious letters that appear under the night sky."
    },

    new AnimeProject
    {
        Id = "3",
        Title = "Pixel Hearts",
        Role = "Insert Song",
        Year = 2026,
        Image = "/images/anime/anime3.png",
        Description = "An energetic insert song featuring Ranmoki and Toti.",
        Episodes = 12,
        Status = "Completed",
        Season = "Summer 2026",
        Genre = ["Sci-Fi", "Comedy", "Adventure"],
        Studio = "Digital Core Studio",
        ContributionType = "Insert Song",
        MembersInvolved = ["Ranmoki", "Toti"],
        MainMember = "Ranmoki",
        PopularityRank = 1,
        Story = "In a digital world, players fight to restore balance between real and virtual reality."
    },

    new AnimeProject
    {
        Id = "4",
        Title = "Crystal Garden",
        Role = "Voice Cast & Opening Theme",
        Year = 2027,
        Image = "/images/anime/anime4.png",
        Description = "Myuki voiced the heroine Hana while Rikumoti performed the opening theme.",
        Episodes = 13,
        Status = "Completed",
        Season = "Spring 2027",
        Genre = ["Fantasy", "Adventure", "Music"],
        Studio = "StarLight Animation",
        ContributionType = "Voice Cast & Opening Theme",
        MembersInvolved = ["Myuki", "Rikumoti"],
        MainMember = "Myuki",
        PopularityRank = 1,
        Story = "A magical garden where emotions turn into living flowers, and every flower holds a memory."
    },

    new AnimeProject
    {
        Id = "5",
        Title = "Neon Rush",
        Role = "Character Song",
        Year = 2027,
        Image = "/images/anime/anime5.png",
        Description = "Ranmoki performed a character song for the racer Akira.",
        Episodes = 24,
        Status = "Completed",
        Season = "Summer 2027",
        Genre = ["Action", "Racing", "Sci-Fi"],
        Studio = "Nova Wings Studio",
        ContributionType = "Character Song",
        MembersInvolved = ["Ranmoki"],
        MainMember = "Ranmoki",
        PopularityRank = 3,
        Story = "A futuristic racing league where speed determines status and survival."
    },

    new AnimeProject
    {
        Id = "6",
        Title = "Moonlight Symphony",
        Role = "Ending Theme",
        Year = 2026,
        Image = "/images/anime/anime6.png",
        Description = "A piano-driven ending theme featuring vocals by Riku.",
        Episodes = 12,
        Status = "Completed",
        Season = "Winter 2026",
        Genre = ["Music", "Drama", "Slice of Life"],
        Studio = "Silver Note Studio",
        ContributionType = "Ending Theme",
        MembersInvolved = ["Riku"],
        MainMember = "Riku",
        PopularityRank = 5,
        Story = "A pianist tries to find the meaning of music after losing her inspiration."
    },

    new AnimeProject
    {
        Id = "7",
        Title = "Cyber Quest",
        Role = "Voice Acting",
        Year = 2027,
        Image = "/images/anime/anime7.png",
        Description = "Toti voiced the genius hacker Mika in this futuristic adventure series.",
        Episodes = 13,
        Status = "Completed",
        Season = "Summer 2027",
        Genre = ["Sci-Fi", "Mystery", "Adventure"],
        Studio = "Digital Core Studio",
        ContributionType = "Voice Acting",
        MembersInvolved = ["Toti"],
        MainMember = "Toti",
        PopularityRank = 2,
        Story = "A virtual world begins to collapse, and a hacker group must uncover the truth behind its creation."
    },

    new AnimeProject
    {
        Id = "8",
        Title = "Silent Seasons",
        Role = "Insert Song",
        Year = 2026,
        Image = "/images/anime/anime8.png",
        Description = "A heartfelt insert song used during the anime's emotional climax.",
        Episodes = 11,
        Status = "Completed",
        Season = "Fall 2026",
        Genre = ["Drama", "Romance", "Slice of Life"],
        Studio = "Blue Horizon Studio",
        ContributionType = "Insert Song",
        MembersInvolved = ["Riku"],
        MainMember = "Riku",
        PopularityRank = 6,
        Story = "A story about letting go of the past and finding peace through music and memories."
    },

    new AnimeProject
    {
        Id = "9",
        Title = "Blazing Wings",
        Role = "Opening Theme",
        Year = 2027,
        Image = "/images/anime/anime9.png",
        Description = "A powerful rock-inspired opening performed by the full group.",
        Episodes = 24,
        Status = "Completed",
        Season = "Spring 2027",
        Genre = ["Action", "Fantasy", "Adventure"],
        Studio = "Nova Wings Studio",
        ContributionType = "Opening Theme",
        MembersInvolved = ["Rikumoti"],
        MainMember = "Myuki",
        PopularityRank = 1,
        Story = "A legendary battle between sky warriors protecting their world from destruction."
    },

    new AnimeProject
    {
        Id = "10",
        Title = "Magic Academy",
        Role = "Character Song Collection",
        Year = 2027,
        Image = "/images/anime/anime10.png",
        Description = "Several members contributed songs for the anime's main characters.",
        Episodes = 12,
        Status = "Completed",
        Season = "Winter 2027",
        Genre = ["Fantasy", "Comedy", "School"],
        Studio = "StarLight Animation",
        ContributionType = "Character Song Collection",
        MembersInvolved = ["Myuki", "Ranmoki", "Riku", "Toti"],
        MainMember = "Riku",
        PopularityRank = 3,
        Story = "A magical academy where students learn spells through music and emotions."
    },

    new AnimeProject
    {
        Id = "11",
        Title = "Ocean Whispers",
        Role = "Ending Theme",
        Year = 2028,
        Image = "/images/anime/anime11.png",
        Description = "A calm and atmospheric ending song highlighting Myuki's gentle vocals.",
        Episodes = 12,
        Status = "Upcoming",
        Season = "Spring 2028",
        Genre = ["Fantasy", "Drama", "Romance"],
        Studio = "Azure Wave Studio",
        ContributionType = "Ending Theme",
        MembersInvolved = ["Myuki"],
        MainMember = "Myuki",
        PopularityRank = 4,
        Story = "A girl hears mysterious voices coming from the ocean that guide her destiny."
    },

    new AnimeProject
    {
        Id = "12",
        Title = "Starlight Symphony",
        Role = "Opening Theme",
        Year = 2028,
        Image = "/images/anime/anime12.png",
        Description = "An orchestral opening theme inspired by the world of classical music.",
        Episodes = 13,
        Status = "Upcoming",
        Season = "Summer 2028",
        Genre = ["Music", "Drama", "Classical"],
        Studio = "Silver Note Studio",
        ContributionType = "Opening Theme",
        MembersInvolved = ["Riku", "Rikumoti"],
        MainMember = "Riku",
        PopularityRank = 2,
        Story = "A young violinist discovers a symphony that connects human emotions across time."
    }
    };
}