"""Optimize supplied illustrations and the publisher's unaltered cover. Development only."""
from pathlib import Path
import sys
from PIL import Image, ImageOps
out = Path(__file__).resolve().parents[1] / 'public'
source = Path(sys.argv[1])
cover = Path(sys.argv[2])
assets = {
    'wings-friend': source / 'Gemini_Generated_Image_9im87j9im87j9im8.jpeg',
    'wings-growing': source / 'Gemini_Generated_Image_dmu4fddmu4fddmu4.jpeg',
    'wings-encouragement': source / 'Gemini_Generated_Image_gk3vppgk3vppgk3v.jpeg',
    'when-i-grow-wings-cover': cover,
}
for name, path in assets.items():
    original = ImageOps.exif_transpose(Image.open(path)).convert('RGB')
    for size, suffix in [(1200, ''), (600, '-small')]:
        image = original.copy()
        image.thumbnail((size, size), Image.Resampling.LANCZOS)
        image.save(out / f'{name}{suffix}.jpg', quality=89, optimize=True, progressive=True)
