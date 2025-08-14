# Kandu Landing Page

This is the landing page for Kandu, an AI-powered job search assistant. The landing page is designed to introduce users to the platform and redirect them to the main application at `app.kandujobs.com`.

## Features

- Modern, responsive design with Tailwind CSS
- Smooth animations with Framer Motion
- Clear call-to-action buttons that redirect to the main app
- SEO optimized with proper meta tags
- Mobile-first design approach

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- React Icons

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd kandu-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Project Structure

```
src/
├── components/
│   └── LandingPage.tsx    # Main landing page component
├── App.tsx                # Root app component
├── main.tsx              # Entry point
└── index.css             # Global styles
```

## Deployment

The landing page is designed to be deployed to `kandujobs.com` and will redirect users to `app.kandujobs.com` for the main application.

### Redirect Logic

- "Get Started" button → redirects to `https://app.kandujobs.com`
- "Sign In" button → redirects to `https://app.kandujobs.com`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary and confidential.
