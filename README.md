# Saas habit testing 13/5

"Habito" a habit tracker website, where we use supabase for storage and authentication., Users can create habits and set goals accordigly.

## Features

- Modern React with TypeScript
- Beautiful UI with Tailwind CSS and Headless UI
- Smooth animations with Framer Motion
- State management with Zustand
- API integration with React Query and Axios
- Responsive design
- Dark mode support
- SEO optimized

## Getting Started

1. Clone this repository

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update the environment variables with your values:
     - `REACT_APP_OPENAI_API_KEY`: Your OpenAI API key
     - `REACT_APP_SUPABASE_ANON_KEY`: Your Supabase anonymous key
     - Other environment variables as needed

4. Start the development server:
   ```bash
   npm start
   ```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Environment Variables

The following environment variables are required:

| Variable | Description |
|----------|-------------|
| REACT_APP_OPENAI_API_KEY | Your OpenAI API key |
| REACT_APP_SUPABASE_URL | Supabase project URL |
| REACT_APP_SUPABASE_ANON_KEY | Supabase anonymous key |
| REACT_APP_API_URL | API base URL |

## Development

- `npm start`: Start development server
- `npm test`: Run tests
- `npm run build`: Build for production
- `npm run lint`: Run ESLint
- `npm run format`: Format code with Prettier

## Built With

- React
- TypeScript
- Tailwind CSS
- Headless UI
- Framer Motion
- React Query
- Zustand
- Axios