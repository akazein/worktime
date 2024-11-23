import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function StatsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Daily Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <Progress value={75} className="w-full h-4" />
          <div className="mt-2 text-center">75% of daily goal reached</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Focus Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-center">12</div>
          <div className="mt-2 text-center">Completed today</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Total Focus Time</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-4xl font-bold text-center">4h 35m</div>
          <div className="mt-2 text-center">Today's total</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Weekly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-end h-32">
            {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day) => (
              <div key={day} className="flex flex-col items-center">
                <div className="bg-blue-500 w-8" style={{height: `${Math.random() * 100}%`}}></div>
                <div className="mt-2">{day}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

