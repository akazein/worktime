import { Link } from 'react-router';
import { Button } from "./ui/button"

export function Navigation() {
  return (
    <nav className="flex justify-between items-center p-4 bg-background border-b">
      <Link to="/" className="text-xl font-bold">WorkTime</Link>
      <div className="space-x-2">
        <Button variant="ghost" asChild>
          <Link to="/edit">Edit Parameters</Link>
        </Button>
        <Button variant="ghost" asChild>
          <Link to="/stats">View Stats</Link>
        </Button>
      </div>
    </nav>
  );
}

