import { useState, useEffect } from 'react';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import { formatTime } from '../utils/formatTime';

export function Dashboard() {
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [isWorking, setIsWorking] = useState(true);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          setIsWorking(!isWorking);
          return isWorking ? 5 * 60 : 25 * 60; // Switch between 25 min work and 5 min break
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorking]);

  useEffect(() => {
    const totalTime = isWorking ? 25 * 60 : 5 * 60;
    setProgress((timeLeft / totalTime) * 100);
  }, [timeLeft, isWorking]);

  return (
    <Card className="w-full max-w-md mx-auto mt-10 overflow-hidden">
      <CardContent className="p-0">
        <div className={`h-4 ${isWorking ? 'bg-blue-500' : 'bg-green-500'}`}>
          <Progress value={progress} className="h-full" />
        </div>
        <div className="flex flex-col items-center p-6 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
          <div className="text-7xl font-bold mb-4 font-mono">{formatTime(timeLeft)}</div>
          <div className="text-xl mb-6 font-light">
            {isWorking ? "Focus Time" : "Break Time"}
          </div>
          <Button 
            onClick={() => setIsWorking(!isWorking)}
            className={`px-8 py-2 rounded-full text-lg font-semibold transition-all duration-300 ${
              isWorking 
                ? 'bg-green-500 hover:bg-green-600' 
                : 'bg-blue-500 hover:bg-blue-600'
            }`}
          >
            {isWorking ? "Take a Break" : "Start Working"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
