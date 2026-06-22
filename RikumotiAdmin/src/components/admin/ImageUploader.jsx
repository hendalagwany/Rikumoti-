function ImageUploader({ label, image, alt, buttonText = "Upload Image", onUpload, uploading = false }) {
    return (
        <div className="image-card">
            <label>{label}</label>

            <div className="image-wrapper">
                {image && (
                    <img
                        src={image}
                        alt={alt}
                        className="member-preview"
                    />
                )}
                <label className="change-image-btn">
                    {uploading ? "Uploading.." : buttonText}
                    <input
                        type="file"
                        accept=".jpg,.jpeg,.png,.webp"
                        onChange={onUpload}
                        hidden
                    />

                </label>
            </div>

            {uploading && <p className="upload-status">Upload image..</p>}

        </div>
    );
}
export default ImageUploader;