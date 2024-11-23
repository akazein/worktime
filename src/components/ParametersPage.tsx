'use client'

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Slider } from "./ui/slider";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";

export function ParametersPage() {
  const [workDuration, setWorkDuration] = useState(25);
  const [breakDuration, setBreakDuration] = useState(5);
  const [notifications, setNotifications] = useState(false);
  const [autoStartBreaks, setAutoStartBreaks] = useState(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      <Card>
        <CardHeader>
          <CardTitle>Work Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={[workDuration]}
            onValueChange={(value) => setWorkDuration(value[0])}
            max={60}
            step={1}
          />
          <div className="mt-2 text-center">{workDuration} minutes</div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Break Duration</CardTitle>
        </CardHeader>
        <CardContent>
          <Slider
            value={[breakDuration]}
            onValueChange={(value) => setBreakDuration(value[0])}
            max={30}
            step={1}
          />
          <div className="mt-2 text-center">{breakDuration} minutes</div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="notifications"
              checked={notifications}
              onCheckedChange={setNotifications}
            />
            <Label htmlFor="notifications">Enable notifications</Label>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>Auto-start Breaks</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Switch
              id="auto-start"
              checked={autoStartBreaks}
              onCheckedChange={setAutoStartBreaks}
            />
            <Label htmlFor="auto-start">Start breaks automatically</Label>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

