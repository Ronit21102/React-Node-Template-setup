function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        Welcome to React + Express Template
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        This is a modern full-stack template featuring:
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600">
        <li>Vite + React for lightning-fast development</li>
        <li>Express.js backend with proper structure</li>
        <li>Tailwind CSS for utility-first styling</li>
        <li>React Router for client-side routing</li>
        <li>Environment variable configuration</li>
        <li>ESLint & Prettier setup</li>
      </ul>
    </div>
  )
}

export default Home
