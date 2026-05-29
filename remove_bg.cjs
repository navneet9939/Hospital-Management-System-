const { Jimp } = require('jimp');

async function removeBg() {
    console.log("Loading image...");
    const image = await Jimp.read('public/images/heavenbed_logo.png');
    
    console.log("Processing pixels...");
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function(x, y, idx) {
        const r = this.bitmap.data[idx + 0];
        const g = this.bitmap.data[idx + 1];
        const b = this.bitmap.data[idx + 2];
        
        // White is (255,255,255). We want to keep white and remove the blue background.
        // We'll calculate brightness. If it's bright (close to white), we make it opaque white.
        // Otherwise, make it transparent.
        const brightness = (r + g + b) / 3;
        
        // Threshold: 200 out of 255
        if (brightness > 200) {
            // Anti-aliasing logic:
            // Calculate how "white" it is. 255 is 100% white.
            const alpha = Math.min(255, (brightness - 200) * 4.6); 
            this.bitmap.data[idx + 0] = 255;
            this.bitmap.data[idx + 1] = 255;
            this.bitmap.data[idx + 2] = 255;
            this.bitmap.data[idx + 3] = alpha; // Alpha channel
        } else {
            this.bitmap.data[idx + 3] = 0; // Fully transparent
        }
    });

    console.log("Saving transparent image...");
    await image.write('public/images/heavenbed_logo_transparent.png');
    console.log("Done!");
}

removeBg().catch(console.error);
