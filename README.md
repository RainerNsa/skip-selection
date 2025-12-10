# Skip Selection Page Redesign

A modern, responsive redesign of the "Choose Your Skip Size" page for We Want Waste, built with React and TypeScript.

## Features

- **Real-time Data**: Fetches skip information from We Want Waste API
- **Responsive Design**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Clean card-based layout with smooth animations
- **Interactive Selection**: Visual feedback and sticky summary bar
- **Error Handling**: Graceful fallback with retry functionality
- **Loading States**: Skeleton screens for better UX
- **Accessibility**: Semantic HTML and keyboard navigation support

## Tech Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Vite** for development and building

## Design Highlights

- **Card-based Layout**: Each skip size displayed in an interactive card
- **Visual Selection**: Selected skips are highlighted with animations
- **Sticky Summary**: Bottom bar shows selected skip details
- **Responsive Grid**: 1-2-3 column layout across devices
- **Loading Skeletons**: Smooth loading experience
- **Hover Effects**: Enhanced interactivity with micro-animations

## Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation
```bash
# Clone the repository
git clone [your-repo-url]
cd skip-selection-redesign

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
npm run build
npm run preview
```

## API Integration

The app fetches skip data from:
```
https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft
```

If the API is unavailable, fallback data is provided for demonstration purposes.

## 📂 Project Structure

```
src/
├── components/
│   ├── SkipCard.tsx          # Individual skip selection card
│   ├── LoadingSkeleton.tsx   # Loading state component  
│   ├── ErrorMessage.tsx      # Error handling component
│   └── SelectionSummary.tsx  # Sticky selection summary
├── pages/
│   └── SkipSelectionPage.tsx # Main page component
├── types/
│   └── skip.ts              # TypeScript interfaces
└── App.tsx                  # Root component
```

## Design Decisions

1. **Color Palette**: Professional blue and green theme
2. **Typography**: Clear hierarchy with readable font sizes
3. **Spacing**: Consistent 8px grid system
4. **Animation**: Subtle transitions for better UX
5. **Accessibility**: High contrast ratios and semantic markup

## Key Components

### SkipCard
Interactive cards showing skip details with selection state management.

### SelectionSummary  
Sticky bottom bar that appears when a skip is selected, showing price and continue action.

### LoadingSkeleton
Animated loading placeholders that match the final card layout.

## Performance Features

- **Lazy Loading**: Efficient rendering of skip cards
- **Error Boundaries**: Graceful error handling
- **Responsive Images**: Optimized for different screen sizes
- **Minimal Bundle**: Clean code with no unnecessary dependencies

## Deployment Ready

This project is production-ready with:
- TypeScript for type safety
- ESLint configuration
- Optimized build process
- SEO-friendly meta tags
- Mobile-responsive design

---

**Challenge completed for We Want Waste frontend redesign**
