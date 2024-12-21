# Full Stack Template - React + Express

A modern full-stack template using React (Vite) for frontend and Express.js for backend, with Tailwind CSS integration.

## Features

- ⚡️ **Vite** - Lightning fast frontend tooling
- 🚀 **Express.js** - Fast, unopinionated backend framework
- 💨 **Tailwind CSS** - Utility-first CSS framework
- 🔥 **Hot Module Replacement** - Instant feedback
- 📱 **Responsive Design** - Mobile-first approach
- 🔒 **Environment Variables** - Secure configuration
- 🎯 **ESLint & Prettier** - Code quality tools

## Quick Start

1. Clone this template:
```bash
git clone https://github.com/yourusername/React-Node-Template-setup.git your-project-name
cd your-project-name
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Create environment files:
```bash
# In server directory
cp .env.example .env

# In client directory
cp .env.example .env
```

4. Start development servers:
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend dev server (from client directory)
npm run dev
```

## Project Structure

```
.
├── client/                 # Frontend React application
│   ├── public/            # Static files
│   ├── src/              # Source files
│   └── vite.config.js    # Vite configuration
├── server/                # Backend Express application
│   ├── src/              # Source files
│   ├── routes/           # API routes
│   └── middleware/       # Express middleware
└── README.md             # Project documentation
```

## Available Scripts

### Backend (server directory)

- `npm run dev` - Start development server with hot-reload
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests

### Frontend (client directory)

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Environment Variables

### Backend (.env)
```
PORT=5000
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
