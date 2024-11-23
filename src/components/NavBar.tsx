import { Button } from "./ui/button";
import { Clock, Settings, BarChart } from 'lucide-react';

type Page = 'dashboard' | 'parameters' | 'stats';

interface NavbarProps {
  setActivePage: (page: Page) => void;
}

export function Navbar({ setActivePage }: NavbarProps) {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold flex items-center">
          <Clock className="mr-2" aria-hidden="true" /> 
          <span>Worktime</span>
        </div>
        <div>
          <Button 
            variant="ghost" 
            className="text-white mr-4" 
            onClick={() => setActivePage('dashboard')}
            aria-label="Go to Dashboard"
          >
            Dashboard
          </Button>
          <Button 
            variant="ghost" 
            className="text-white mr-4" 
            onClick={() => setActivePage('parameters')}
            aria-label="Go to Parameters"
          >
            <Settings className="mr-2" aria-hidden="true" /> Parameters
          </Button>
          <Button 
            variant="ghost" 
            className="text-white" 
            onClick={() => setActivePage('stats')}
            aria-label="Go to Stats"
          >
            <BarChart className="mr-2" aria-hidden="true" /> Stats
          </Button>
        </div>
      </div>
    </nav>
  );
}

