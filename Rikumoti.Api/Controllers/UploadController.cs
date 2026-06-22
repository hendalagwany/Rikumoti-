using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    private static readonly HashSet<string> AllowedFolders = [
        "members",
        "news",
        "music",
        "anime",
        "voiceacting",
        "merch",
        "gallery"
        ];

    [HttpPost("{folder}")]
    public async Task<IActionResult> UploadFile(
        [FromForm] IFormFile file,
        string folder
        )
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        if (!AllowedFolders.Contains(folder.ToLower()))
        {
            return BadRequest("Invalid folder.");
        }

        var allowedExtensions = new[]
        {
         ".jpg",
         ".jpeg",
         ".png",
         ".webp"
        };

        var extension = Path.GetExtension(file.FileName).ToLower();

        if (!allowedExtensions.Contains(extension))
        {
            return BadRequest("Unsupported file type.");
        }
        const long maxSize = 5 * 1024 * 1024;

        if (file.Length > maxSize)
        {
            return BadRequest("Maximum file size is 5 MB.");
        }

        var uploadsFolder = Path.Combine(
            Directory.GetCurrentDirectory(),
            "wwwroot",
            "uploads",
            folder
        );

        if (!Directory.Exists(uploadsFolder))
        {
            Directory.CreateDirectory(uploadsFolder);
        }

        var fileName = $"{Guid.NewGuid()}{extension}";

        var filePath = Path.Combine(
               uploadsFolder,
               fileName
           );
           
        using var stream = new FileStream(filePath, FileMode.Create);

        await file.CopyToAsync(stream);

        var imageUrl = $"/uploads/{folder}/{fileName}";

        return Ok(new { imageUrl });
    }
}