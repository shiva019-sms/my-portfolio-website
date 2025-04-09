# Personal Portfolio Website

A modern, responsive portfolio website built with React.js, TypeScript, Tailwind CSS, and Framer Motion. Features smooth animations, glassmorphism design, and a clean user interface.

## Features

- 🎨 Modern UI design with glassmorphism effects
- 🌊 Smooth scroll animations
- 📱 Fully responsive layout
- ⚡ Fast performance
- 🎭 Interactive elements with Framer Motion
- 🎯 Clean and organized code structure

## Tech Stack

- React.js
- TypeScript
- Tailwind CSS
- Framer Motion
- React Scroll

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd my_portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm start
# or
yarn start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Project Structure

```
src/
├── components/         # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Hero.tsx
│   ├── Internships.tsx
│   ├── Navbar.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── App.tsx            # Main App component
├── index.tsx          # Entry point
└── index.css          # Global styles
```

## Customization

1. Colors: Edit the gradient colors in `tailwind.config.js` and `index.css`
2. Content: Update the content in respective component files
3. Animations: Modify Framer Motion variants in component files
4. Styles: Customize Tailwind CSS classes in components

## Building for Production

```bash
npm run build
# or
yarn build
```

This will create an optimized production build in the `build` folder.

## Deployment

The site can be deployed to various platforms:

- Vercel
- Netlify
- GitHub Pages
- AWS Amplify

## Contributing

Feel free to submit issues and enhancement requests! 