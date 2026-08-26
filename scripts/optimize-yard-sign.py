"""
Resize the yard sign source image into fast-loading web assets.

Reads:   public/vince-yard-sign.png  (original, ~1.3 MB, kept untouched)
Writes:  public/vince-yard-sign-720.webp  (~27 KB, served to modern browsers)
         public/vince-yard-sign-720.jpg   (~47 KB, fallback for old browsers)

720px wide = 2x density for the 360px max display width (retina-crisp).
Run from the project root:  python scripts/optimize-yard-sign.py
"""

from PIL import Image
import os

SRC = "public/vince-yard-sign.png"
TARGET_W = 720
WEBP_QUALITY = 82
JPEG_QUALITY = 82


def main():
    img = Image.open(SRC).convert("RGB")  # source PNG is opaque; RGB is enough
    w, h = img.size
    target_h = round(h * TARGET_W / w)
    small = img.resize((TARGET_W, target_h), Image.LANCZOS)

    small.save("public/vince-yard-sign-720.webp", "WEBP", quality=WEBP_QUALITY, method=6)
    small.save(
        "public/vince-yard-sign-720.jpg",
        "JPEG",
        quality=JPEG_QUALITY,
        optimize=True,
        progressive=True,
    )

    print(f"source {w}x{h} -> {TARGET_W}x{target_h}")
    for f in ("public/vince-yard-sign-720.webp", "public/vince-yard-sign-720.jpg"):
        print(f"{f}  {os.path.getsize(f) / 1024:.0f} KB")


if __name__ == "__main__":
    main()
