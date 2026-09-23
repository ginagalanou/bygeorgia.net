"""Development-only artwork preparation. Usage: python prepare-book-images.py /path/to/original.jpeg"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

out = Path(__file__).resolve().parents[1] / 'public'
artwork = ImageOps.exif_transpose(Image.open(sys.argv[1])).convert('RGB')
for size, filename in [(1280, 'when-i-grow-wings-artwork.jpg'), (640, 'when-i-grow-wings-artwork-small.jpg')]:
    image = artwork.copy()
    image.thumbnail((size, size), Image.Resampling.LANCZOS)
    image.save(out / filename, quality=90, optimize=True, progressive=True)
canvas = Image.new('RGB', (1200, 630), '#e2f4fa')
draw = ImageDraw.Draw(canvas)
font_dir = Path('/System/Library/Fonts/Supplemental')
def font(name, size):
    return ImageFont.truetype(str(font_dir / name), size)
draw.ellipse((520, -120, 1250, 720), fill='#ffdb60')
draw.text((60, 38), 'ByGeorgia.', font=font('Georgia.ttf', 28), fill='#203f37')
draw.text((60, 125), '#ByGeorgia   /   A story to grow with', font=font('Arial Bold.ttf', 19), fill='#203f37')
draw.text((55, 185), 'When I', font=font('Trebuchet MS Bold.ttf', 76), fill='#203f37')
draw.text((55, 268), 'Grow Wings', font=font('Trebuchet MS Bold.ttf', 76), fill='#203f37')
draw.text((60, 390), 'A story about growing\nin your own time.', font=font('Trebuchet MS Bold.ttf', 30), fill='#203f37', spacing=7)
draw.text((60, 532), 'Georgia G. Luchen & Vasileios G. Luchen', font=font('Arial.ttf', 18), fill='#496159')
art = Image.open(out / 'when-i-grow-wings-cover.jpg').convert('RGB')
art.thumbnail((500, 500), Image.Resampling.LANCZOS)
draw.rounded_rectangle((642, 57, 1158, 573), radius=16, fill='#ffffff')
canvas.paste(art, (650 + (500 - art.width) // 2, 65))
canvas.save(out / 'when-i-grow-wings-og.png', optimize=True)
