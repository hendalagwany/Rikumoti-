using Microsoft.AspNetCore.Mvc;

namespace Rikumoti.Api.Controllers;
[ApiController]
[Route("api/[controller]")]
public class UploadController : ControllerBase
{
    private readonly IWebHostEnvironment _environment;

    public UploadController(IWebHostEnvironment environment)
    {
        _environment = environment;
    }

    private static readonly HashSet<string> AllowedImageFolders =
    [
        "members",
        "news",
        "music",
        "anime",
        "voiceacting",
        "merch",
        "gallery"
    ];

    private static readonly HashSet<string> AllowedAudioFolders =
    [
        "song"
    ];

    // ==========================
    // Upload Images
    // POST: /api/upload/image/news
    // POST: /api/upload/image/members
    // ==========================

    [HttpPost("image/{folder}")]
    public async Task<IActionResult> UploadImage(
        [FromForm] IFormFile file,
        string folder)
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        folder = folder.ToLower();

        if (!AllowedImageFolders.Contains(folder))
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
            return BadRequest("Unsupported image type.");
        }

        const long maxSize = 5 * 1024 * 1024;

        if (file.Length > maxSize)
        {
            return BadRequest("Maximum image size is 5 MB.");
        }

        var uploadsFolder = Path.Combine(
            _environment.WebRootPath,
            "uploads",
            folder
        );

        Directory.CreateDirectory(uploadsFolder);

        var fileName = $"{Guid.NewGuid()}{extension}";

        var filePath = Path.Combine(
            uploadsFolder,
            fileName
        );

        await using var stream = new FileStream(
            filePath,
            FileMode.Create
        );

        await file.CopyToAsync(stream);

        var imageUrl = $"/uploads/{folder}/{fileName}";

        return Ok(new { imageUrl });
    }

    // ==========================
    // Upload Audio Files
    // POST: /api/upload/audio/music
    // ==========================

    [HttpPost("audio/{folder}")]
    public async Task<IActionResult> UploadAudio(
        [FromForm] IFormFile file,
        string folder)
    {
        if (file == null || file.Length == 0)
        {
            return BadRequest("No file uploaded.");
        }

        folder = folder.ToLower();

        if (!AllowedAudioFolders.Contains(folder))
        {
            return BadRequest("Invalid folder.");
        }

        var allowedExtensions = new[]
        {
            ".mp3",
            ".m4a",
            ".wav"
        };

        var extension = Path.GetExtension(file.FileName).ToLower();

        if (!allowedExtensions.Contains(extension))
        {
            return BadRequest("Unsupported audio type.");
        }

        const long maxSize = 10 * 1024 * 1024;

        if (file.Length > maxSize)
        {
            return BadRequest("Maximum audio size is 10 MB.");
        }

        var uploadsFolder = Path.Combine(
            _environment.WebRootPath,
            "uploads",
            folder
        );

        Directory.CreateDirectory(uploadsFolder);

        var fileName = $"{Guid.NewGuid()}{extension}";

        var filePath = Path.Combine(
            uploadsFolder,
            fileName
        );

        await using var stream = new FileStream(
            filePath,
            FileMode.Create
        );

        await file.CopyToAsync(stream);

        var audioUrl = $"/uploads/{folder}/{fileName}";

        return Ok(new { audioUrl });
    }
}