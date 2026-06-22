using Rikumoti.Api.Models;
namespace Rikumoti.Api.Data;

public static class MembersData
{
    public static List<Member> Members = new()
    {
        new Member
        {
                Id = "myuki",
                Name = "Myuki",
                Image = "/images/members/M-voiceacting.png",
                DetailsImg = "/images/members/MCharacterDetails.png",
                Age = 30,
                Instrument = "Piano",
                InstrumentIcon = "piano",
                Color = "#E7C84E",
                SecondaryColor = "#7AB8FF",
                Hobby = "Baking",
                Pin = "music",
                FavoriteFood = "Pizza",
                FavoriteDrink = "Coffee",
                FavoriteColor = "Yellow",
                Birthday = "June 2",
                Quote = "Music can heal hearts.",
                ClassName = "myuki",
                Bio = "The oldest member of the group and a talented pianist.",
                Tagline = "The caring big sister"
        },
        new Member
            {
                Id = "ranmoki",
                Name = "Ranmoki",
                Image = "/images/members/Ra-voiceacting.png",
                DetailsImg = "/images/members/RaCharacterDetails.png",
                Age = 27,
                Instrument = "Drums",
                InstrumentIcon = "drum",
                Color = "#63D9FF",
                SecondaryColor = "#74E58B",
                Hobby = "Gaming",
                Pin = "cloud",
                FavoriteFood = "Chocolate Cake",
                FavoriteColor = "Sky Blue",
                FavoriteDrink = "Coffee",
                Birthday = "November 20",
                ClassName = "ranmoki",
                Bio = "The energetic drummer of the group. She is always full of excitement and brings life to every rehearsal and performance.",
                Quote = "Every beat tells a story.",
                Tagline = "The energy of the group"
            },

            new Member
            {
                Id = "riku",
                Name = "Riku",
                Image = "/images/members/R-voiceacting.png",
                DetailsImg = "/images/members/RCharacterDetails.png",
                Age = 25,
                Instrument = "Guitar",
                InstrumentIcon = "guitar",
                Color = "#7A263A",
                SecondaryColor = "#D9D9D9",
                Hobby = "Coffee and Cup Collecting",
                Pin = "coffee",
                FavoriteFood = "Pizza",
                FavoriteDrink = "Coffee",
                FavoriteColor = "Burgundy",
                ClassName = "riku",
                Birthday = "January 11",
                Quote = "Even the softest melody can reach someone's heart.",
                Bio = "A calm and dependable guitarist who enjoys quiet moments, coffee, and collecting beautiful cups. She supports everyone from behind the scenes.",
                Tagline = "Calm and dependable"
            },

            new Member
            {
                Id = "toti",
                Name = "Toti",
                Image = "/images/members/T-voiceacitng.png",
                DetailsImg = "/images/members/TCharacterDetails.png",
                Age = 24,
                Instrument = "Bass",
                InstrumentIcon = "guitar",
                Color = "#B86DFF",
                SecondaryColor = "#FF8DD8",
                Hobby = "Programming",
                Pin = "home",
                FavoriteFood = "Chocolate Cake",
                FavoriteColor = "Lavender",
                FavoriteDrink = "Coffee",
                Birthday = "June 27",
                ClassName = "toti",
                Bio = "The bassist of the group with a passion for programming and problem solving. Her warm smile makes everyone feel at home.",
                Quote = "Small steps create the greatest journeys.",
                Tagline = "A smile that brings comfort"
            }
    };
}