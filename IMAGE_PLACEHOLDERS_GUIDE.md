# Hotel O Secret Heaven - Image Placeholders Guide

## Overview
This guide explains where to place your actual hotel images to replace all placeholders in the website.

## Directory Structure
All images should be placed in the `/public/images/` directory with the following naming convention:

```
public/
└── images/
    ├── facade-01.jpg through facade-06.jpg       (6 facade images)
    ├── room-01.jpg through room-28.jpg           (28 room images)
    ├── lobby-01.jpg through lobby-18.jpg         (18 lobby images)
    ├── reception-01.jpg through reception-08.jpg (8 reception images)
    ├── entrance-01.jpg through entrance-06.jpg   (6 entrance images)
    ├── washroom-01.jpg through washroom-05.jpg   (5 washroom images)
    └── amenity-*.jpg                             (8 amenity images)
```

## Image Requirements

### 1. Facade Images (6 images)
**Location:** `/public/images/facade-01.jpg` to `/public/images/facade-06.jpg`
**Purpose:** Hotel exterior and architectural views
**Recommended Size:** 1920x1080 pixels (landscape/horizontal)
**Used In:**
- Hero section background (facade-01.jpg)
- Facade gallery section
- Footer image strip

### 2. Room Images (28 images)
**Location:** `/public/images/room-01.jpg` to `/public/images/room-28.jpg`
**Purpose:** Individual room and suite photos
**Recommended Size:** 800x600 pixels
**Used In:**
- Rooms & Suites section (all 28 images displayed in grid)
- Photo Showcase Wall (first 14 images)
**Categories:**
- room-01.jpg to room-10.jpg: Deluxe Rooms
- room-11.jpg to room-20.jpg: Executive Suites
- room-21.jpg to room-28.jpg: Presidential Suites

### 3. Lobby Images (18 images)
**Location:** `/public/images/lobby-01.jpg` to `/public/images/lobby-18.jpg`
**Purpose:** Grand lobby and lounge area photos
**Recommended Size:** 800x900 pixels (vertical orientation works well)
**Used In:**
- Lobby & Reception section
- Photo Showcase Wall
- Quick Highlights (lobby-01.jpg)

### 4. Reception Images (8 images)
**Location:** `/public/images/reception-01.jpg` to `/public/images/reception-08.jpg`
**Purpose:** Reception desk and front desk area
**Recommended Size:** 800x600 pixels
**Used In:**
- Lobby & Reception section
- Photo Showcase Wall

### 5. Entrance Images (6 images)
**Location:** `/public/images/entrance-01.jpg` to `/public/images/entrance-06.jpg`
**Purpose:** Hotel entrance and main gateway
**Recommended Size:** 1200x800 pixels (landscape)
**Used In:**
- Facade & Entrance section

### 6. Washroom Images (5 images)
**Location:** `/public/images/washroom-01.jpg` to `/public/images/washroom-05.jpg`
**Purpose:** Luxury bathroom and spa-like facilities
**Recommended Size:** 800x600 pixels
**Used In:**
- Washroom Gallery section (washroom-01.jpg displays larger)

### 7. Amenity Images (8 images)
**Location:** `/public/images/amenity-*.jpg`
**Purpose:** Hotel facilities and services
**Recommended Size:** 800x600 pixels
**Files Needed:**
- amenity-pool.jpg (Infinity Pool)
- amenity-spa.jpg (Luxury Spa)
- amenity-dining.jpg (Fine Dining Restaurant)
- amenity-cuisine.jpg (Gourmet Cuisine)
- amenity-gym.jpg (Fitness Center)
- amenity-conference.jpg (Conference Hall)
- amenity-garden.jpg (Garden Terrace)
- amenity-bar.jpg (Bar & Lounge)

## Total Image Count
- **Facade:** 6 images
- **Room:** 28 images
- **Lobby:** 18 images
- **Reception:** 8 images
- **Entrance:** 6 images
- **Washroom:** 5 images
- **Amenities:** 8 images
- **TOTAL:** 79 images

## Image Format Recommendations
- **Format:** JPG (for photographs) or PNG (for graphics with transparency)
- **Quality:** High quality (80-90% compression for JPG)
- **Optimization:** Compress images for web to improve loading times
- **Aspect Ratios:**
  - Horizontal/Landscape: 16:9 or 3:2
  - Vertical/Portrait: 3:4 or 2:3
  - Square: 1:1

## Quick Setup Instructions

1. Create the images directory:
   ```bash
   mkdir -p public/images
   ```

2. Copy your images to the directory with the correct naming:
   ```bash
   cp /path/to/your/facade1.jpg public/images/facade-01.jpg
   cp /path/to/your/facade2.jpg public/images/facade-02.jpg
   # ... and so on
   ```

3. Or use a bulk rename tool if you already have images numbered

4. Make sure all images are optimized for web (recommended tool: ImageOptim, TinyPNG, or similar)

## Design Specifications

### Image Display Variations
The website uses different display styles for visual impact:

1. **Full-screen Hero:** facade-01.jpg (covers entire viewport)
2. **Masonry Grid:** Mixed vertical/horizontal in Photo Showcase
3. **Card Grid:** Standard grid layout for rooms
4. **Wide Horizontal:** Facade and entrance sections
5. **Vertical Frames:** Lobby images
6. **Diagonal Overlays:** Quick Highlights section

### Responsive Behavior
All images are responsive and will:
- Scale appropriately on mobile devices
- Maintain aspect ratio
- Use object-cover to fill containers
- Include hover effects (zoom, overlay)

## Fallback Handling
If an image is missing, the browser will show:
- A shimmer loading animation (grey gradient)
- The alt text describing the image
- A broken image indicator

## Next Steps After Adding Images

1. **Test the website:**
   ```bash
   npm start
   ```

2. **Check all sections:**
   - Hero section
   - Quick Highlights
   - Photo Showcase Wall
   - Rooms & Suites (verify all 28 rooms display)
   - Lobby & Reception
   - Facade & Entrance
   - Washroom Gallery
   - Amenities
   - Footer image strip

3. **Optimize performance:**
   - Run Lighthouse audit
   - Consider lazy loading for below-fold images
   - Add WebP versions for better compression

## Color Scheme
The website uses a **purple and indigo** gradient theme:
- Primary: Purple (#9333ea to #7e22ce)
- Secondary: Indigo (#4f46e5 to #4338ca)

Consider this when selecting/editing images for visual coherence.

## Contact
For any questions about image placement or requirements, refer to this guide or check the `src/mock.js` file for image path references.
