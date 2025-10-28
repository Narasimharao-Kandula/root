# Portfolio Cleanup and Enhancement Plan

## Information Gathered
- The portfolio is a React app with components for Header, Main (Home, About, Skills, Projects, Contact), and Footer.
- CSS uses CSS variables for themes (light/dark), but many styles are hardcoded and not responsive.
- Unnecessary debug borders (e.g., border: 2px solid black) in multiple sections.
- Image path in HomePage.jsx is incorrect (uses src\assets instead of relative).
- Layouts use fixed grids that don't adapt to mobile screens.
- Fonts and spacing are inconsistent; not fully utilizing theme variables.
- App.jsx has an irrelevant h1 tag.
- Overall, the design lacks professionalism and responsiveness.

## Plan
1. **Remove unnecessary code and debug styles:**
   - Remove debug borders from all CSS files.
   - Remove the irrelevant h1 in App.jsx.

2. **Fix image paths and assets:**
   - Correct the image src in HomePage.jsx to use a proper relative path or public folder.

3. **Improve responsiveness and layouts:**
   - Update CSS for all sections to use responsive grids/flexbox.
   - Ensure mobile-first design with media queries.
   - Use clamp() for fonts and spacing where appropriate.

4. **Use theme variables consistently:**
   - Replace hardcoded colors with CSS variables (e.g., var(--text-color), var(--bg-color)).
   - Ensure dark mode works properly.

5. **Enhance design and professionalism:**
   - Improve button styles, hover effects.
   - Add subtle animations/transitions.
   - Ensure consistent spacing and typography.
   - Make contact form functional (add basic JS if needed, but since it's static, at least style it better).

6. **Test responsiveness:**
   - Ensure it looks good on desktop, tablet, mobile.

## Dependent Files to Edit
- src/App.jsx
- src/pages/HomePage.jsx
- src/styles/HomePage.css
- src/styles/AboutPage.css
- src/styles/SkillsPage.css
- src/styles/ProjectsPage.css
- src/styles/ContactPage.css
- src/styles/Main.css
- src/styles/HeaderPage.css
- src/styles/FooterPage.css

## Followup Steps
- After edits, run the app locally to test.
- Check responsiveness on different screen sizes.
- Verify dark/light theme toggle works.
- If needed, add more projects or improve content.
