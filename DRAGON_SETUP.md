# Dragon Background Setup

## How to Add Your Dragon GIF

1. **Get a Dragon GIF:**
   - Find a dragon GIF online (e.g., from Giphy, Tenor, or create your own)
   - Recommended: Dark/black dragon that matches Tesla theme
   - Size: 1920x1080 or larger for best quality

2. **Add the GIF:**
   - Option 1: Save the GIF in your project folder as `dragon-bg.gif`
   - Option 2: Upload to a hosting service (Imgur, Cloudinary, etc.) and use the URL

3. **Update the HTML:**
   - Open `index.html`
   - Find line with: `<img src="https://i.imgur.com/dragon-bg.gif"`
   - Replace with your GIF URL or local path: `<img src="dragon-bg.gif"`

## Example Dragon GIF Sources:
- Giphy: https://giphy.com/search/dragon
- Tenor: https://tenor.com/search/dragon-gifs
- Or create your own animated dragon

## Current Setup:
- The background uses a dragon GIF with low opacity (15%)
- Dark filter applied to match Tesla theme
- Animated floating effect
- Fallback gradient if GIF doesn't load

## Project Icons:
- Currently using Flaticon icons (realistic images)
- You can replace these in `config.js` with your own icon URLs
- Or use local images in an `images/` folder

