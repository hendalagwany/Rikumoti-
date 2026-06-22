using Rikumoti.Api.Data;

namespace Rikumoti.Api.Models;

public static class SeedData
{
    public static void Initialize(AppDbContext context)
    {
        if (!context.Members.Any())
            context.Members.AddRange(MembersData.Members);

        if (!context.News.Any())
            context.News.AddRange(NewsData.News);

        if (!context.Anime.Any())
            context.Anime.AddRange(AnimeData.Anime);

        if (!context.Music.Any())
            context.Music.AddRange(MusicData.Songs);

        if (!context.VoiceActing.Any())
            context.VoiceActing.AddRange(VoiceActingData.VoiceActing);

        if (!context.Merch.Any())
            context.Merch.AddRange(MerchData.Merch);

        context.SaveChanges();

    }
}