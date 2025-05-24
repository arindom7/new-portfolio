# Modern Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and styled-components. Features a beautiful UI with smooth animations and transitions.

## Features

- Fullscreen intro section with animated profile
- Smooth scroll navigation
- Responsive design
- Project showcase
- Contact form
- Social media links
- Modern animations using Framer Motion

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
cd myportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Customization

1. Replace the profile image:
   - Add your photo to the `public` directory
   - Update the image path in `Intro.tsx` and `Home.tsx`

2. Update personal information:
   - Modify the text content in each component
   - Update social media links in `Contact.tsx`
   - Add your projects in `Projects.tsx`

3. Customize colors and styling:
   - The color scheme can be modified in the styled components
   - Font sizes and spacing can be adjusted in the respective component files

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be created in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Styled Components
- Framer Motion
- React Icons

## License

MIT
