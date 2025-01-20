# ChromaMorph

ChromaMorph is an interactive, web-based art tool that visualizes the beauty of transition and transformation through evolving color gradients, morphing shapes, and real-time user interaction.

![ChromaMorph Demo](https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&q=80&w=2000)

## Features

- **Dynamic Shape Morphing**: Smooth transitions between various geometric shapes
- **Interactive Color Palettes**: Choose from a curated selection of color schemes
- **Speed Control**: Adjust the pace of transformations
- **Real-time Animation**: Fluid, responsive animations powered by p5.js
- **Responsive Design**: Works seamlessly across desktop and mobile devices

## Tech Stack

- **React**: Frontend framework
- **TypeScript**: Type-safe development
- **p5.js**: Creative coding and animations
- **Tailwind CSS**: Styling and responsive design
- **Vite**: Build tool and development server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/chroma-morph.git
   cd chroma-morph
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/         # React components
│   ├── ui/            # Reusable UI components
│   └── Canvas.tsx     # Main p5.js canvas component
├── constants/         # Configuration and constant values
├── types/            # TypeScript types and interfaces
├── utils/            # Helper functions and utilities
└── App.tsx           # Root component
```

## Usage

1. **Speed Control**: Use the slider to adjust the transformation speed
2. **Color Selection**: Click on any color in the palette to change the color scheme
3. **Shape Selection**: Choose different shapes to see various morphing patterns

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [p5.js](https://p5js.org/) for the creative coding library
- [Lucide Icons](https://lucide.dev/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework