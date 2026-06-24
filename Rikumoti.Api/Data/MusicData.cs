using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public static class MusicData
{
    public static List<Songs> Songs = new()
    {
        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Blooming Days",
            Audio = "/sounds/song1.mp3",
            Cover = "/images/songs/song1.png",
            Singer = "group",
            Album = "Rikumoti First Collection",
            Genre = "Pop",
            ReleaseDate = new DateTime(2025, 1, 10),
            Duration = TimeSpan.FromMinutes(0, 3, 45),
            IsFeatured = true,
            Anime = "Rikumoti Story",
            Role = "Opening Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Don't Stop Believing",
            Audio = "/sounds/song2.m4a",
            Cover = "/images/songs/song2.png",
            Singer = "group",
            Album = "Rikumoti First Collection",
            Genre = "Rock",
            ReleaseDate = new DateTime(2025, 2, 5),
            Duration = TimeSpan.FromMinutes(4,10),
            IsFeatured = false,
            Anime = "Rikumoti Story",
            Role = "Ending Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Silent Notes",
            Audio = "/sounds/song3.m4a",
            Cover = "/images/songs/song3.png",
            Singer = "group",
            Album = "Rikumoti First Collection",
            Genre = "Ambient",
            ReleaseDate = new DateTime(2025, 3, 1),
            Duration = TimeSpan.FromMinutes(2,58),
            IsFeatured = false,
            Anime = "Rikumoti Story",
            Role = "Insert Song"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Break The Limit",
            Audio = "/sounds/song4.m4a",
            Cover = "/images/songs/song4.png",
            Singer = "group",
            Album = "Rikumoti First Collection",
            Genre = "Rock",
            ReleaseDate = new DateTime(2025, 4, 12),
            Duration = TimeSpan.FromMinutes(3,55),
            IsFeatured = true,
            Anime = "Rikumoti Story",
            Role = "Battle Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Golden Piano",
            Audio = "/sounds/song6.m4a",
            Cover = "/images/songs/Msong.png",
            Singer = "myuki",
            Album = "Solo Collection - Myuki",
            Genre = "Classical",
            ReleaseDate = new DateTime(2025, 5, 20),
            Duration = TimeSpan.FromMinutes(3,20),
            IsFeatured = false,
            Anime = "Rikumoti Side Stories",
            Role = "Character Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Drum Beat",
            Audio = "/sounds/song5.m4a",
            Cover = "/images/songs/Rasong.png",
            Singer = "ranmoki",
            Album = "Solo Collection - Ranmoki",
            Genre = "Electronic",
            ReleaseDate = new DateTime(2025, 6, 15),
            Duration = TimeSpan.FromMinutes(3,40),
            IsFeatured = false,
            Anime = "Rikumoti Side Stories",
            Role = "Character Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Quiet Melody",
            Audio = "/sounds/song8.m4a",
            Cover = "/images/songs/Rsong.png",
            Singer = "riku",
            Album = "Solo Collection - Riku",
            Genre = "Jazz",
            ReleaseDate = new DateTime(2025, 7, 1),
            Duration = TimeSpan.FromMinutes(4,00),
            IsFeatured = false,
            Anime = "Rikumoti Side Stories",
            Role = "Character Theme"
        },

        new Songs
        {
            Id = Guid.NewGuid().ToString(),
            Title = "Home Bass",
            Audio = "/sounds/song9.m4a",
            Cover = "/images/songs/Tsong.png",
            Singer = "toti",
            Album = "Solo Collection - Toti",
            Genre = "Hip Hop",
            ReleaseDate = new DateTime(2025, 8, 10),
            Duration = TimeSpan.FromMinutes(3,25),
            IsFeatured = true,
            Anime = "Rikumoti Side Stories",
            Role = "Character Theme"
        }

    };
}