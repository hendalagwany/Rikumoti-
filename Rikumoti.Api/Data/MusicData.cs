using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public static class MusicData
{
    public static List<Song> Songs = new()
    {
        new Song
            {
                Id = "1",
                Title = "Blooming Days",
                Audio = "/sounds/song1.mp3",
                Cover = "/images/songs/song1.png",
                Singer = "group"
            },

            new Song
            {
                Id = "2",
                Title = "Don't Stop Believing",
                Audio = "/sounds/song2.m4a",
                Cover = "/images/songs/song2.png",
                Singer = "group"
            },

            new Song
            {
                Id = "3",
                Title = "Silent Notes",
                Audio = "/sounds/song3.m4a",
                Cover = "/images/songs/song3.png",
                Singer = "group"
            },

            new Song
            {
                Id = "4",
                Title = "Break The Limit",
                Audio = "/sounds/song4.m4a",
                Cover = "/images/songs/song4.png",
                Singer = "group"
            },

            new Song
            {
                Id = "5",
                Title = "Golden Piano",
                Audio = "/sounds/song6.m4a",
                Cover = "/images/songs/Msong.png",
                Singer = "myuki"
            },

            new Song
            {
                Id = "6",
                Title = "Drum Beat",
                Audio = "/sounds/song5.m4a",
                Cover = "/images/songs/Rasong.png",
                Singer = "ranmoki"
            },

            new Song
            {
                Id = "7",
                Title = "Quiet Melody",
                Audio = "/sounds/song8.m4a",
                Cover = "/images/songs/Rsong.png",
                Singer = "riku"
            },

            new Song
            {
                Id = "8",
                Title = "Home Bass",
                Audio = "/sounds/song9.m4a",
                Cover = "/images/songs/Tsong.png",
                Singer = "toti"
            }
    };
}