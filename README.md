# MovieFinder - React Movie Search Application

A modern, responsive movie search application built with React, TypeScript, and Tailwind CSS. Search for movies, view detailed information, and manage your personal favorites collection.

![MovieFinder](https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=1200)

## Features

### 🎬 Core Functionality
- **Movie Search**: Search for movies using the OMDb API
- **Movie Details**: View comprehensive information including plot, cast, ratings, and more
- **Favorites System**: Add/remove movies to your personal favorites collection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 🎨 User Experience
- **Modern Dark Theme**: Sleek gradient backgrounds and professional styling
- **Loading States**: Smooth loading animations and error handling
- **Hover Effects**: Interactive movie cards with micro-animations
- **Persistent Favorites**: Favorites are saved to localStorage

### 🏗️ Technical Implementation
- **React Router**: Client-side routing for seamless navigation
- **Context API**: Global state management for favorites
- **TypeScript**: Type-safe development with comprehensive interfaces
- **Reusable Components**: Modular component architecture
- **Error Boundaries**: Robust error handling throughout the application

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── SearchBar.tsx   # Movie search input
│   ├── MovieCard.tsx   # Individual movie display
│   ├── MovieList.tsx   # Grid of movie cards
│   ├── LoadingSpinner.tsx
│   └── ErrorMessage.tsx
├── pages/              # Route components
│   ├── HomePage.tsx    # Main search interface
│   ├── MovieDetailsPage.tsx  # Detailed movie view
│   └── FavoritesPage.tsx     # User's favorite movies
├── contexts/           # React Context providers
│   └── FavoritesContext.tsx  # Favorites state management
├── services/           # API integration
│   └── movieService.ts # OMDb API functions
└── App.tsx            # Main application component
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AhmedALHadiwi/movie-app.git
   cd movie-finder
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## API Configuration

This application uses the OMDb API (The Open Movie Database) for fetching movie data. The API key is included for development purposes, but for production use, you should:

1. Get your own free API key from [OMDb API](http://www.omdbapi.com/apikey.aspx)
2. Replace the API key in `src/services/movieService.ts`
3. Consider using environment variables for API keys in production

## Component Architecture

### Reusable Components

**SearchBar Component**
- Handles movie search input
- Provides loading states and form validation
- Communicates with parent through callback props

**MovieCard Component**
- Displays movie poster, title, and year
- Integrated favorites functionality
- Hover effects and responsive design

**MovieList Component**
- Renders grid of MovieCard components
- Responsive layout with CSS Grid
- Supports optional titles for different sections

### State Management

**FavoritesContext**
- Global state management using React Context
- localStorage integration for data persistence
- Type-safe operations for adding/removing favorites

## Styling & Design

### Design System
- **Color Palette**: Dark theme with blue and purple accents
- **Typography**: Clean, readable fonts with proper hierarchy
- **Spacing**: Consistent 8px spacing system
- **Components**: Rounded corners, subtle shadows, and smooth transitions

### Responsive Breakpoints
- **Mobile**: < 768px (1 column)
- **Tablet**: 768px - 1024px (2-3 columns)
- **Desktop**: > 1024px (4-5 columns)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance Considerations

- **Lazy Loading**: Images load on demand
- **Error Boundaries**: Graceful error handling
- **Optimized Bundle**: Tree-shaking and code splitting
- **Caching**: API responses and localStorage for favorites

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- OMDb API for movie data
- Lucide React for beautiful icons
- Tailwind CSS for utility-first styling
- React team for the amazing framework
