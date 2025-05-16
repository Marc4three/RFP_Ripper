# RFP Ripper Tool Pitch Website

A modern, futuristic one-page pitch website for the RFP Ripper Tool, built by P5TechSolutions for Vatortech.

## Features

- Modern, responsive design with dark mode
- Animated transitions using Framer Motion
- Glassmorphism UI elements
- Mobile-first approach
- Built with Next.js 14, TypeScript, and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd rfp-ripper
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── components/     # Reusable components
│   ├── sections/       # Page sections
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Main page
├── public/
│   └── logos/         # Logo assets
```

## Deployment

The project is configured for deployment on Vercel or Azure Static Web Apps.

### Vercel Deployment

1. Push your code to a Git repository
2. Import the project in Vercel
3. Deploy

### Azure Static Web Apps Deployment

1. Push your code to a Git repository
2. Create a new Static Web App in Azure
3. Connect your repository
4. Deploy

## Customization

- Update the logo files in `public/logos/`
- Modify the color scheme in `src/app/globals.css`
- Edit content in the section components under `src/app/sections/`

## License

This project is confidential and intended solely for Vatortech.
Unauthorized distribution or reproduction is prohibited.

© 2024 P5TechSolutions. All rights reserved. 