# Anthony Lacerba — Hockey Goalie Final Project

Responsive personal hockey-goaltending website built with Bootstrap 5.

## Pages
- `index.html` — Home and site introduction
- `about.html` — Personal hockey journey and experience
- `profile.html` — Goalie profile, quick facts, equipment, and skills (Module 4)
- `tips.html` — Beginner goalie guide, practice tips, and embedded YouTube tutorial (Module 5)
- `live-feed.html` — Hockey photo gallery and goalie development
- `purpose.html` — Website purpose, audience, and structure (Module 2)

## Technology
HTML5, Bootstrap 5.3.3 via CDN, and custom responsive CSS in `assets/css/styles.css`.

An internet connection is needed to load Bootstrap and play the embedded YouTube video.

## Photos and videos
The uploaded hockey photos are included in `assets/images/` and shown throughout the site, especially on the Live Feed page. The Live Feed also has four playable MP4 highlights in `assets/videos/`. Three longer original recordings were shortened to 18-second previews for a smaller GitHub upload. The fourth, originally 15 seconds, is included in full. The original large MOV files are not included, consistent with the assignment instructions. The existing embedded YouTube tutorial is retained.

## View locally
Open `index.html` in a browser. Keep the `assets` folder beside the HTML files.

## Publish with GitHub Pages
1. Sign in to GitHub and create a new public repository named `hockey-goalie-final-project` (or another name your instructor approves).
2. Upload the **contents** of this folder to the repository root. Do not upload only the ZIP.
3. Commit the files to the `main` branch.
4. Open repository **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch **main** and folder **/(root)**, then save.
7. After publishing, the site URL normally follows this format: `https://YOUR-USERNAME.github.io/hockey-goalie-final-project/`.
8. Share both repository URL (`https://github.com/YOUR-USERNAME/hockey-goalie-final-project`) and the published Pages URL with your instructor.

Replace `YOUR-USERNAME` with your actual GitHub username. GitHub account access is not connected here, so uploading and publishing must be completed from your GitHub account.


## Added photos and videos
The `assets/images/` folder contains the latest supplied hockey photos. The `assets/videos/` folder contains four compressed MP4 highlight clips embedded on `live-feed.html`. The MP4 files are compressed for browser compatibility and easier GitHub hosting.


## Important: upload the complete website contents

Do not upload only this ZIP file to GitHub. Extract it first, then upload `index.html`, the other HTML pages, and the entire `assets` folder (including `assets/images` and `assets/videos`) into the repository root. Keep the folder names and file names unchanged. GitHub Pages needs those asset files alongside the HTML pages for photos and videos to load.

After deployment, open `live-feed.html` from the website navigation to see the photo gallery and four MP4 clips. If you replace an older version, remove the old HTML files and `assets` folder first, then upload this complete set.


## Module 7 draft update
The home page (`index.html`) has been refreshed with a clearer visual hierarchy, stronger contrast, consistent navigation and card styling, aligned content sections, and improved keyboard accessibility. The shared stylesheet also updates the presentation across the other pages.


## Module 9 additions
- The home page uses semantic HTML5 structure including `header`, `nav`, `main`, `section`, `article`, `figure`, `figcaption`, and `footer`.
- The home page includes an HTML5 `type="email"` input and a JavaScript-powered sign-up demonstration. The form validates the address and displays feedback locally; it does not send or store email addresses.
- `assets/images/goalie-mark.svg` is the new scalable hockey-goalie graphic used on the home page.
- `assets/js/site.js` contains the form interaction, and `assets/css/styles.css` contains its responsive styling.
- Earlier project pages, images, and videos are retained.
