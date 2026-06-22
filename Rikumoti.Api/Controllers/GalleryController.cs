using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class GalleryController : ControllerBase
{
   [HttpGet]
   public IActionResult Getimages()
   {
      var galleryPath = Path.Combine(
       Directory.GetCurrentDirectory(),
       "wwwroot",
       "images",
       "gallery"
      );

      var images = Directory
      .GetFiles(galleryPath)
       .Select((file, index) => new
       {
          Id = index + 1,
          Image = "/images/gallery/" + Path.GetFileName(file),
          Title = Path.GetFileNameWithoutExtension(file)
       }).ToList();

      return Ok(images);
   }
}
