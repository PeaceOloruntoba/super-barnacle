# Asset guide

## Icons (tools / social / decorative props)
Real PNGs go here, replacing the auto-generated placeholder stubs currently in place.
Rule: lowercase, kebab-case, transparent background, ~2x display size for crispness.

src/assets/icons/tools/
  canva.png, notion.png, capcut.png, google-drive.png,
  ms-office.png, slack.png, pinterest.png

src/assets/icons/social/
  instagram.png, linkedin.png, tiktok.png, facebook.png

src/assets/props/   (decorative hero objects)
  sunglasses.png, camera-1.png, camera-2.png, folder.png,
  iced-drink.png, blush-brush.png

Just overwrite the file at each path with your real PNG (same filename) —
no code changes needed, the imports already point here.

## Photos (placeholders to swap)
Larger photos/screenshots currently use https://placehold.co/... URLs so the
site works out of the box. Replace these `src` values directly in each
component when you have real images:
  - src/components/AboutMe.tsx     — profile photo
  - src/components/Wins.tsx        — 4 analytics screenshots
  - src/components/ClientCase.tsx  — client screenshot (used by both Client A & B)
  - src/components/VideoEditing.tsx — 3 video edit thumbnails
