import sharp from 'sharp'

async function processImage(imageBuffer: Buffer) {
  try {
    // Resize and optimize the image using sharp
    const optimizedImage = await sharp(imageBuffer)
      .resize(800, 600, { fit: 'inside' }) // Resize image to 800x600, keeping aspect ratio
      .webp({ quality: 80 }) // Convert to WebP format and set quality to 80
      .toBuffer() // Convert to buffer ready for upload

    return optimizedImage
  } catch {
    throw new Error('Error processing image')
  }
}

export { processImage }
