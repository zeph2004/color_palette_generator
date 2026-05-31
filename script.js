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
    const saturation = Math.floor(Math.random() * 56) + 45;

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
// COMPLEMENTARY PALETTE
// ====================

function generateComplementaryPalette(baseColor) {
    const palette = [];

    const availableRange =
        MAX_LIGHTNESS - baseColor.lightness;
    
    const interval =
        availableRange / 2;

    const complementaryHue = (baseColor.hue + 180) % 360

        for (let i = 0; i < 3; i++) {
        palette.push({
            hue: baseColor.hue,
            saturation: baseColor.saturation,
            lightness:
                baseColor.lightness +
                i * interval
        });
    }

        for (let i = 0; i < 2; i++) {
            palette.push({
                hue: complementaryHue,
                saturation: baseColor.saturation,
                lightness: baseColor.lightness + (i*2) * interval
            });
    }

    return palette;
}

// ====================
// TRIADIC PALETTE
// ====================
function generateTriadicPalette(baseColor) {
    const palette = [];

    const availableRange =
        MAX_LIGHTNESS - baseColor.lightness;
    
    const interval =
        availableRange / 2;
    
    for (let i = 0; i < 3; i++) {
        palette.push({
            hue: (baseColor.hue + (120 * i)) % 360,
            saturation: baseColor.saturation,
            lightness: baseColor.lightness
        });
    }
    for (let i = 0; i < 2; i++) {
        palette.push({
            hue: baseColor.hue,
            saturation: baseColor.saturation,
            lightness: baseColor.lightness + ((i + 1) * interval)
        });
    }
    return palette;
}

// ====================
// TETRADIC PALETTE
// ====================

function generateTetradicPalette(baseColor) {
    const palette = [];

    const availableRange =
        MAX_LIGHTNESS - baseColor.lightness;

    for (let i = 0; i < 4; i++) {
        palette.push({
            hue: (baseColor.hue + (90 * i)) % 360,
            saturation: baseColor.saturation,
            lightness: baseColor.lightness
        });
    }

    palette.push({
        hue: baseColor.hue,
        saturation: baseColor.saturation,
        lightness: baseColor.lightness + availableRange
    });

    return palette;
}

// ====================
// TESTING
// ====================

const baseColor = generateBaseColor();

palettes.monochromatic =
    generateMonochromaticPalette(baseColor);

palettes.complementary =
    generateComplementaryPalette(baseColor);

palettes.triadic =
    generateTriadicPalette(baseColor);

palettes.tetradic = 
    generateTetradicPalette(baseColor);

console.log("Base Color:");
console.log(baseColor);

console.log("Monochromatic Palette:");
console.log(palettes.monochromatic);

console.log("Complementary Palette:");
console.log(palettes.complementary);

console.log("Triadic Palette:");
console.log(palettes.triadic);

console.log("Tetradic Palette:");
console.log(palettes.tetradic);