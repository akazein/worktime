import React from 'react';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <nav className="container mx-auto flex justify-between">
          <a href="/" className="text-xl font-bold">
            MyApp
          </a>
          <div className="space-x-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/stats" className="hover:underline">Stats</a>
            <a href="/settings" className="hover:underline">Settings</a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-4">
        
        </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
