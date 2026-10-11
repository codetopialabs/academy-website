#!/usr/bin/env bash
# Rebuilds the link-preview images (public/og-kids.png, public/og-adults.png) from the HTML next to this file.
# Needs Google Chrome. Run from the project folder: bash scripts/og/build.sh
set -euo pipefail
here="$(cd "$(dirname "$0")" && pwd)"
for page in kids adults; do
  google-chrome --headless=new --disable-gpu --hide-scrollbars --window-size=1200,630 \
    --virtual-time-budget=6000 --screenshot="$here/../../public/og-$page.png" "file://$here/$page.html" 2>/dev/null
done
echo "built public/og-kids.png and public/og-adults.png"
