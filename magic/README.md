# MagicPaw Website 🐾✨

MagicPaw is a responsive, single-page promotional website created for a fictional cat-themed meme token ecosystem. The website combines a magical Halloween-inspired visual style with modern responsive web design practices.

The project was developed using **React**, **Vite**, and **Tailwind CSS**, and was deployed using **Vercel**.

The final website includes separate visual treatments for desktop and mobile devices while keeping the same React components and codebase.

---

## Live Demo

 [The deployed website is available here:](https://magic-paw.vercel.app/)


---

## Project Overview

The purpose of this project is to present the MagicPaw token concept through an attractive and responsive website.

The website introduces:

* The MagicPaw brand
* The project vision
* Token allocation details
* Development roadmap
* Planned games
* Frequently asked questions
* Community and newsletter information

The entire website is implemented as a single scrollable page. Navigation links smoothly scroll users to the relevant section instead of loading separate pages.

---

## Main Features

* Responsive single-page design
* Desktop and mobile-specific layouts
* Fixed desktop navigation bar
* Mobile hamburger navigation menu
* Smooth scrolling between sections
* Custom visual assets
* Responsive tokenomics chart
* Responsive roadmap design
* Mobile-friendly FAQ section
* Professional footer
* Vercel deployment
* Automatic redeployment from GitHub

---

## Technology Stack

| Technology   | Purpose                                      |
| ------------ | -------------------------------------------- |
| React        | Component-based user interface               |
| Vite         | Development server and production build tool |
| Tailwind CSS | Responsive styling and layout                |
| JavaScript   | Component logic and interaction              |
| React Router | Application routing                          |
| GitHub       | Source code hosting and version control      |
| Vercel       | Frontend deployment and hosting              |

---

## Project Structure

```txt
project-root/
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── images/
│   │   │   ├── Logo.png
│   │   │   ├── Cat Large.png
│   │   │   ├── Cat Full.png
│   │   │   ├── Horror House.png
│   │   │   ├── Horror House Glow.png
│   │   │   ├── Leaves.png
│   │   │   ├── Grass.png
│   │   │   ├── pumpbox.png
│   │   │   └── bg image.png
│   │   ├── components/
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Landing.jsx
│   │   │   ├── About.jsx
│   │   │   ├── tokenomics.jsx
│   │   │   ├── roadmap.jsx
│   │   │   ├── games.jsx
│   │   │   └── faq.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vercel.json
│   └── README.md
```

---

# UI and UX Design Decisions

## 1. Single-Page Scrolling Design

The website was originally structured using separate page components. During development, the design was changed into a single scrollable website.

All major sections are rendered inside `Home.jsx`:

```jsx
<Landing />
<About />
<Tokenomics />
<Roadmap />
<Games />
<FAQ />
```

Each section uses an ID:

```txt
#home
#about
#tokenomics
#roadmap
#games
#faq
#contact
```

The navigation bar uses these IDs to scroll directly to each section.

This approach was selected because:

* It creates a smoother promotional website experience.
* Users can explore the entire project without page reloads.
* It works well for token, startup, and product landing pages.
* It simplifies navigation on mobile devices.

---

## 2. Mobile-First Responsive Strategy

The website uses Tailwind CSS responsive breakpoints.

The general approach is:

```txt
Default classes → Mobile layout
sm:             → Small tablets
md:             → Tablets
lg:             → Laptops and desktops
xl:             → Large desktop screens
```

Example:

```jsx
className="text-4xl sm:text-7xl md:text-8xl lg:text-[120px]"
```

This allows the same React component to adapt to different screen sizes.

A separate mobile website was not created. Instead, selected sections display different layouts using responsive Tailwind utilities.

---

# Section-by-Section Design Decisions

## Landing Section

The landing section is the main visual introduction to MagicPaw.

It contains:

* MagicPaw title
* Tagline
* Haunted house background
* Tree branches
* Grass foreground
* Cat characters
* Background glow

### Desktop Design

The desktop layout uses two cat visuals:

* A large cat
* A smaller cat

The haunted house is positioned in the center behind the title and characters.

The left and right tree branches are displayed as decorative side elements. The same `Leaves.png` image is reused on both sides, with the left image flipped horizontally.

Desktop layout example:

```jsx
hidden sm:flex
```

This displays the two-cat design from tablet and desktop screen sizes.

### Mobile Design

The mobile layout uses a single `Cat Full.png` image.

This decision was made because:

* Two cats took up too much horizontal space.
* The single full-cat image creates a cleaner composition.
* The cat can be positioned near the bottom and visually connected to the grass.
* The haunted house remains visible behind the cat.

Mobile layout example:

```jsx
sm:hidden
```

The house is intentionally larger on mobile so that it remains visually dominant behind the cat.

The mobile branches are smaller than the desktop branches to prevent them from covering the title, house, or cat.

---

## About Section

The About section explains the MagicPaw project and includes:

* About heading
* Project description
* Learn More button
* Haunted house image
* Full cat image
* Right-side branches
* Grass foreground

### Desktop Design

On desktop, the layout uses two columns:

```txt
Left side  → Text and haunted house
Right side → Cat image
```

The house and cat are separated to create a balanced wide-screen composition.

### Mobile Design

On mobile:

* The text is centered.
* The Learn More button becomes full width.
* The house is placed on the left.
* The full cat is placed on the right.
* The house and cat overlap the grass layer.

The house is deliberately larger on mobile to match the reference design and create a stronger visual background.

Layer order:

```txt
House → behind
Grass → middle
Cat   → foreground
```

This is controlled using Tailwind `z-index` values.

---

## Tokenomics Section

The Tokenomics section displays:

```txt
Total Supply: 30,000,000
Marketing: 50%
Liquidity Pool (LP): 20%
Tax: 15%
Sell Tax: 15%
```

The total supply is shown separately and is not part of the chart.

### Donut Chart

A custom SVG donut chart is used.

The segments are connected as one complete chart:

* Magenta → Marketing
* Blue-green → Liquidity Pool
* Blue → Tax
* Yellow → Sell Tax

The percentages add up to 100%.

The chart is responsive because the SVG uses:

```jsx
viewBox="0 0 360 360"
```

The chart scales automatically based on its parent container.

### Progress Bars

The same data is used to generate responsive progress bars.

Each bar width is calculated dynamically:

```jsx
style={{
  width: `${item.value}%`,
  backgroundColor: item.color,
}}
```

This means changing a value in the data array automatically updates:

* The donut chart
* The progress bar
* The percentage label

---

## Roadmap Section

The Roadmap section contains four stages.

### Desktop Design

The desktop version uses an alternating roadmap layout:

```txt
Stage 1 → Top
Stage 2 → Bottom
Stage 3 → Top
Stage 4 → Bottom
```

A horizontal center line connects all stages.

The stage labels use the same background color as the section so that the center line does not pass through the text.

### Mobile Design

The desktop roadmap is replaced by stacked cards on mobile.

This was done because the alternating roadmap layout becomes too narrow and difficult to read on small screens.

Mobile cards provide:

* Better text readability
* More spacing
* Easier vertical scrolling
* Improved touch usability

Responsive switching:

```jsx
hidden md:block
```

for desktop, and:

```jsx
md:hidden
```

for mobile.

---

## Games Section

The Games section introduces:

* MagicPaw Quests
* MagicPaw Arena

The section uses:

* Haunted house background
* Dark overlay
* Pumpkin-shaped text boxes
* Responsive game descriptions

The `pumpbox.png` image is used as the visual frame for each game card.

### Desktop Design

The game cards are placed on opposite sides of the haunted house.

### Mobile Design

The cards are displayed vertically.

This prevents overlapping and allows users to read each game description clearly.

---

## FAQ Section

The FAQ section uses native HTML `<details>` and `<summary>` elements.

Benefits:

* No external accordion library is required.
* Keyboard accessibility is supported.
* Mobile interaction works naturally.
* The FAQ remains lightweight.

Each FAQ item includes:

* Question
* Expand/collapse icon
* Answer
* Hover and open-state styling

The FAQ background uses a custom image with a dark green overlay.

---

## Footer

The footer is placed inside the FAQ section at the bottom of the page.

It includes:

* MagicPaw logo
* Brand description
* Navigation links
* Newsletter subscription field
* Copyright text
* Privacy Policy link
* Terms link

The footer uses a dark glass-like container with:

```txt
Border
Backdrop blur
Rounded corners
Shadow
Responsive grid
```

### Desktop Footer

The footer uses a multi-column layout:

```txt
Brand | Navigation | Newsletter
```

### Mobile Footer

The footer sections stack vertically.

This improves readability and prevents the subscription input from overflowing.

---

# Navigation Design

## Desktop Navigation

Desktop users see:

* Logo
* About Us
* Roadmap
* Tokenomics
* FAQ
* Contact Us
* Buy Now button

The navigation remains fixed at the top.

---

## Mobile Navigation

Mobile users see a hamburger menu button.

When opened, the menu appears as a right-side panel.

The panel contains:

* Close button
* Outlined navigation buttons
* Buy Now button at the bottom

The background behind the menu becomes darker to focus attention on the menu.

The menu automatically closes after selecting a navigation link.

---

# Typography

The website uses:

```txt
PT Sans → Main body typography
Cabin   → Selected headings
```

The fonts are imported in `index.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Cabin:wght@400;700&display=swap");
```

The default body font is:

```css
body {
  font-family: "PT Sans", sans-serif;
}
```

Selected headings can use:

```css
.heading-font {
  font-family: "Cabin", sans-serif;
}
```

---

# Responsive Design Summary

| Section    | Mobile View               | Desktop View            |
| ---------- | ------------------------- | ----------------------- |
| Navigation | Hamburger side menu       | Horizontal navigation   |
| Landing    | One full cat              | Two cat images          |
| About      | Overlapping house and cat | Two-column layout       |
| Tokenomics | Stacked chart and content | Side-by-side layout     |
| Roadmap    | Vertical cards            | Alternating timeline    |
| Games      | Stacked pumpkin cards     | Cards on opposite sides |
| FAQ        | Single-column accordion   | Two-column grid         |
| Footer     | Stacked layout            | Multi-column layout     |

---

# Accessibility Considerations

The project includes several basic accessibility practices:

* Images include descriptive `alt` text.
* Navigation buttons include accessible labels.
* The mobile menu button uses `aria-label`.
* FAQ items use semantic `<details>` elements.
* Text colors are designed to maintain contrast against dark backgrounds.
* Buttons and menu items are large enough for touch interaction.

---

# Installation

Clone the repository:

```bash
git clone https://github.com/Mesit-Rathnayake/magic_paw.git
```

Move into the frontend folder:

```bash
cd YOUR_REPOSITORY_NAME/frontend
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL shown in the terminal:

```txt
http://localhost:5173
```

---

# Production Build

Create a production build:

```bash
npm run build
```

The production files are generated inside:

```txt
dist/
```

Preview the production build:

```bash
npm run preview
```

---

# Vercel Deployment

The project is deployed using Vercel.

The correct Vercel settings are:

```txt
Framework Preset: Vite
Root Directory: frontend
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

The project uses `dist` instead of `build` because Vite generates production files inside the `dist` directory.

---

## SPA Routing Configuration

The project includes a `vercel.json` file:

```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

This ensures that React Router can handle browser refreshes and direct route access.

---

# Automatic Deployment

The Vercel project is connected to GitHub.

After making changes:

```bash
git add .
git commit -m "Update MagicPaw website"
git push
```

Vercel automatically detects the new commit and deploys the updated website.

---

# Available Scripts

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

---

# Future Improvements

Possible future improvements include:

* Functional newsletter subscription
* Real cryptocurrency wallet integration
* Live token statistics
* Real exchange links
* Social media integration
* Animated section transitions
* Improved accessibility testing
* SEO metadata
* Loading optimization
* Custom domain integration
* Game demo integration
* Backend API support

---

# Author

Developed by:

**Mesith Rathnayake**

Computer Engineering Undergraduate

---

# License

This project was created for educational, demonstration, and portfolio purposes.

All visual assets should be used according to their original ownership and licensing conditions.
