using Rikumoti.Api.Models;

namespace Rikumoti.Api.Data;

public static class MerchData
{
    public static List<MerchItem> Merch = new()
    {
         new MerchItem
            {
                Id = "1",
                Name = "Rikumoti Album",
                Category = "Album",
                Price = "$25",
                Stock = "In Stock",
                ReleaseDate = "June 2026",
                Image = "/images/merch/product1.png",
                Description = "The first official Rikumoti album featuring the group's most beloved songs and exclusive bonus tracks."
            },

            new MerchItem
            {
                Id = "2",
                Name = "Official T-Shirt",
                Category = "Clothing",
                Price = "$20",
                Stock = "In Stock",
                ReleaseDate = "May 2026",
                Image = "/images/merch/product2.png",
                Description = "Comfortable cotton T-shirt featuring the official Rikumoti logo and member-inspired design."
            },

            new MerchItem
            {
                Id = "3",
                Name = "Acrylic Stand Set",
                Category = "Collectible",
                Price = "$15",
                Stock = "Limited Stock",
                ReleaseDate = "July 2026",
                Image = "/images/merch/product3.png",
                Description = "A complete acrylic stand collection featuring all four Rikumoti members."
            },

            new MerchItem
            {
                Id = "4",
                Name = "Photobook",
                Category = "Book",
                Price = "$18",
                Stock = "In Stock",
                ReleaseDate = "August 2026",
                Image = "/images/merch/product4.png",
                Description = "A special photobook packed with exclusive illustrations, behind-the-scenes photos, and member interviews."
            },

            new MerchItem
            {
                Id = "5",
                Name = "Light Stick",
                Category = "Concert Goods",
                Price = "$22",
                Stock = "In Stock",
                ReleaseDate = "September 2026",
                Image = "/images/merch/product5.png",
                Description = "Official Rikumoti light stick designed for concerts and live performances."
            },

            new MerchItem
            {
                Id = "6",
                Name = "Character Keychain Set",
                Category = "Accessory",
                Price = "$12",
                Stock = "In Stock",
                ReleaseDate = "June 2026",
                Image = "/images/merch/product6.png",
                Description = "A cute keychain collection inspired by Myuki, Ranmoki, Riku, and Toti."
            },

            new MerchItem
            {
                Id = "7",
                Name = "Rikumoti Hoodie",
                Category = "Clothing",
                Price = "$40",
                Stock = "Limited Stock",
                ReleaseDate = "October 2026",
                Image = "/images/merch/product7.png",
                Description = "Premium hoodie with embroidered Rikumoti branding and a comfortable oversized fit."
            },

            new MerchItem
            {
                Id = "8",
                Name = "Concert Towel",
                Category = "Concert Goods",
                Price = "$15",
                Stock = "In Stock",
                ReleaseDate = "July 2026",
                Image = "/images/merch/product8.png",
                Description = "Official concert towel featuring colorful member artwork and event branding."
            },

            new MerchItem
            {
                Id = "9",
                Name = "Can Badge Collection",
                Category = "Collectible",
                Price = "$8",
                Stock = "In Stock",
                ReleaseDate = "June 2026",
                Image = "/images/merch/product9.png",
                Description = "A set of collectible badges showcasing unique illustrations of each member."
            },

            new MerchItem
            {
                Id = "10",
                Name = "Sticker Pack",
                Category = "Accessory",
                Price = "$6",
                Stock = "In Stock",
                ReleaseDate = "May 2026",
                Image = "/images/merch/product10.png",
                Description = "Decorative sticker pack containing member icons, logos, and special artwork."
            },

            new MerchItem
            {
                Id = "11",
                Name = "Mini Plush Collection",
                Category = "Plush",
                Price = "$28",
                Stock = "Limited Stock",
                ReleaseDate = "November 2026",
                Image = "/images/merch/product11.png",
                Description = "A collection of adorable mini plush mascots inspired by the members of Rikumoti."
            },

            new MerchItem
            {
                Id = "12",
                Name = "Postcard Set",
                Category = "Stationery",
                Price = "$10",
                Stock = "In Stock",
                ReleaseDate = "June 2026",
                Image = "/images/merch/product12.png",
                Description = "A high-quality postcard collection featuring beautiful artwork and group illustrations."
            }
           
    };
}