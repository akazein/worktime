import { useState } from "react";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import { Navbar } from "./components/NavBar";
import { ParametersPage } from "./components/ParametersPage";
import { StatsPage } from "./components/StatsPage";

type Page = 'dashboard' | 'parameters' | 'stats';

function App() {
  const [activePage, setActivePage] = useState<Page>('dashboard');

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar setActivePage={setActivePage} />
      <main className="container mx-auto px-4 py-8">
        {activePage === 'dashboard' && <Dashboard />}
        {activePage === 'parameters' && <ParametersPage />}
        {activePage === 'stats' && <StatsPage />}
      </main>
    </div>
  );
}

export default App;

