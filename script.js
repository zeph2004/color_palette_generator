// ====================
// CONFIGURATION
// ====================

const MAX_LIGHTNESS = 92;


// ====================
// BASE COLOR GENERATION
// ====================

function generateBaseColor() {
    const hue = Math.floor(Math.random() * 360);

    // Saturation: 45 - 90
    const saturation = Math.floor(Math.random() * 46) + 45;

    // Lightness: 50 - 80
    const lightness = Math.floor(Math.random() * 31) + 50;

    return {
        hue,
        saturation,
        lightness
    };
}


// ====================
// PALETTE STORAGE
// ====================

const palettes = {
    monochromatic: [],
    complementary: [],
    triadic: [],
    tetradic: []
};


// ====================
// MONOCHROMATIC PALETTE
// ====================

function generateMonochromaticPalette(baseColor) {
    const palette = [];

    const availableRange =
        MAX_LIGHTNESS - baseColor.lightness;

    const interval =
        availableRange / 4;

    for (let i = 0; i < 5; i++) {
        palette.push({
            hue: baseColor.hue,
            saturation: baseColor.saturation,
            lightness:
                baseColor.lightness +
                i * interval
        });
    }

    return palette;
}


// ====================
// TESTING
// ====================

const baseColor = generateBaseColor();

palettes.monochromatic =
    generateMonochromaticPalette(baseColor);

console.log("Base Color:");
console.log(baseColor);

console.log("Monochromatic Palette:");
console.log(palettes.monochromatic);