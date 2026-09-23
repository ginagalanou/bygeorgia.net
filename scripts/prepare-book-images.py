"""Development-only artwork preparation. Usage: python prepare-book-images.py /path/to/original.jpeg"""
from pathlib import Path
import sys
from PIL import Image, ImageDraw, ImageFont, ImageOps

out = Path(__file__).resolve().parents[1] / 'public'
cover = ImageOps.exif_transpose(Image.open(sys.argv[1])).convert('RGB')
for size, filename in [(1280, 'when-i-grow-wings-cover.jpg'), (640, 'when-i-grow-wings-cover-small.jpg')]:
    image = cover.copy()
    image.thumbnail((size, size), Image.Resampling.LANCZOS)
    image.save(out / filename, quality=90, optimize=True, progressive=True)
canvas = Image.new('RGB', (1200, 630), '#fbf8f1')
draw = ImageDraw.Draw(canvas)
font_dir = Path('/System/Library/Fonts/Supplemental')
def font(name, size):
    return ImageFont.truetype(str(font_dir / name), size)
draw.text((65, 48), 'ByGeorgia.', font=font('Georgia.ttf', 28), fill='#322a39')
draw.text((65, 146), 'A CHILDREN’S BOOK BY A MOTHER AND SON', font=font('Arial.ttf', 15), fill='#89692c')
draw.text((60, 190), 'When I', font=font('Georgia.ttf', 72), fill='#322a39')
draw.text((60, 268), 'Grow Wings', font=font('Georgia Italic.ttf', 72), fill='#765a73')
draw.text((65, 385), 'A story about growing\nin your own time.', font=font('Georgia.ttf', 27), fill='#322a39', spacing=10)
draw.text((65, 520), 'Georgia G. Luchen & Vasileios G. Luchen', font=font('Arial.ttf', 18), fill='#655f65')
art = cover.copy()
art.thumbnail((500, 500), Image.Resampling.LANCZOS)
canvas.paste(art, (650, 65))
canvas.save(out / 'when-i-grow-wings-og.png', optimize=True)
