using Microsoft.EntityFrameworkCore;
using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options)
    : base(options)
    {

    }

    public DbSet<Member> Members { get; set; }
    public DbSet<News> News { get; set; }
    public DbSet<Song> Music { get; set; }
    public DbSet<AnimeProject> Anime { get; set; }
    public DbSet<VoiceActingProject> VoiceActing { get; set; }
    public DbSet<MerchItem> Merch { get; set; }

}