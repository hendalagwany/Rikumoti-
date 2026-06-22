using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public static class NewsData
{
    public static List<News> News = new()
    {
        new News
    {
        Id = "1",
        Title = "New Single Announced",
        Date = "June 10, 2026",
        Image = "/images/news/new1.png",
        Description = "Rikumoti announced a brand new single that will be released next month.",
        Category = "Music",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Music", "Single", "Release"]
    },

    new News
    {
        Id = "2",
        Title = "Summer Live Event",
        Date = "July 15, 2026",
        Image = "/images/news/new2.png",
        Description = "The group will perform at the Summer Stars Festival.",
        Category = "Event",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Live", "Festival", "Concert"]
    },

    new News
    {
        Id = "3",
        Title = "Voice Acting Collaboration",
        Date = "August 2, 2026",
        Image = "/images/news/new3.png",
        Description = "Several members will participate in a new anime project.",
        Category = "Voice Acting",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = false,
        Tags = ["Anime", "Voice Acting"]
    },

    new News
    {
        Id = "4",
        Title = "Behind-the-Scenes Studio Tour",
        Date = "August 20, 2026",
        Image = "/images/news/new4.png",
        Description = "Rikumoti shared a special behind-the-scenes video from their recording studio.",
        Category = "Media",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = false,
        Tags = ["Studio", "Behind The Scenes"]
    },

    new News
    {
        Id = "5",
        Title = "Official Fan Meeting Announced",
        Date = "September 5, 2026",
        Image = "/images/news/new5.png",
        Description = "The group will host their first official fan meeting with games and live performances.",
        Category = "Event",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Fans", "Meeting", "Live"]
    },

    new News
    {
        Id = "6",
        Title = "Anime Convention Appearance",
        Date = "September 18, 2026",
        Image = "/images/news/new6.png",
        Description = "Rikumoti members will appear as special guests at a major anime convention.",
        Category = "Event",
        Member = "Rikumoti",
        Author = "Rikumoti Staff",
        Featured = false,
        Tags = ["Convention", "Anime"]
    },

    new News
    {
        Id = "7",
        Title = "Myuki Cast as Lead Heroine",
        Date = "May 5, 2027",
        Image = "/images/news/new7.png",
        Description = "Myuki has been selected as the lead voice actress for the upcoming fantasy anime 'Crystal Garden'.",
        Category = "Voice Acting",
        Member = "Myuki",
        Anime = "Crystal Garden",
        Role = "Lead Heroine",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Myuki", "Anime", "Lead Role"]
    },

    new News
    {
        Id = "8",
        Title = "Myuki Releases Piano Session Video",
        Date = "May 20, 2027",
        Image = "/images/news/new8.png",
        Description = "Fans were treated to a special video featuring Myuki performing a piano arrangement of a Rikumoti song.",
        Category = "Music",
        Member = "Myuki",
        Author = "Myuki",
        Featured = false,
        Tags = ["Piano", "Music", "Myuki"]
    },

    new News
    {
        Id = "9",
        Title = "Ranmoki Joins New Game Project",
        Date = "June 2, 2027",
        Image = "/images/news/new9.png",
        Description = "Ranmoki will voice one of the main characters in an upcoming action-adventure game.",
        Category = "Voice Acting",
        Member = "Ranmoki",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Game", "Voice Acting", "Ranmoki"]
    },

    new News
    {
        Id = "10",
        Title = "Ranmoki Appears on Anime Radio Show",
        Date = "June 18, 2027",
        Image = "/images/news/new10.png",
        Description = "Ranmoki shared stories about recording sessions and her favorite anime roles.",
        Category = "Interview",
        Member = "Ranmoki",
        Author = "Anime Radio Staff",
        Featured = false,
        Tags = ["Interview", "Radio", "Ranmoki"]
    },

    new News
    {
        Id = "11",
        Title = "Riku Performs Solo Stage",
        Date = "July 8, 2027",
        Image = "/images/news/new11.png",
        Description = "Riku delivered a heartfelt solo performance during the group's summer concert.",
        Category = "Music",
        Member = "Riku",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Concert", "Solo", "Riku"]
    },

    new News
    {
        Id = "12",
        Title = "Riku Featured in Music Magazine",
        Date = "July 25, 2027",
        Image = "/images/news/new12.png",
        Description = "A popular music magazine published an interview discussing Riku's creative process.",
        Category = "Interview",
        Member = "Riku",
        Author = "Music Magazine",
        Featured = false,
        Tags = ["Magazine", "Interview", "Riku"]
    },

    new News
    {
        Id = "13",
        Title = "Toti Launches Weekly Livestream",
        Date = "August 4, 2027",
        Image = "/images/news/new13.png",
        Description = "Toti started a weekly livestream series focused on anime, games, and fan interactions.",
        Category = "Livestream",
        Member = "Toti",
        Author = "Toti",
        Featured = false,
        Tags = ["Livestream", "Games", "Toti"]
    },

    new News
    {
        Id = "14",
        Title = "Toti Voices Genius Detective",
        Date = "August 22, 2027",
        Image = "/images/news/new14.png",
        Description = "Toti has been cast as the lead detective in the mystery anime 'Pixel Hearts'.",
        Category = "Voice Acting",
        Member = "Toti",
        Anime = "Pixel Hearts",
        Role = "Lead Detective",
        Author = "Rikumoti Staff",
        Featured = true,
        Tags = ["Anime", "Mystery", "Toti"]
    }


    };
}