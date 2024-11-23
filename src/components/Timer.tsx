import { Card, CardContent } from "@/components/ui/card"

interface TimerProps {
  timeLeft: number;
  nextBreak: string;
}

export function Timer({ timeLeft, nextBreak }: TimerProps) {
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardContent className="flex flex-col items-center justify-center p-6">
        <div className="text-6xl font-bold tabular-nums mb-4">
          {formatTime(timeLeft)}
        </div>
        <p className="text-lg text-muted-foreground">
          Next break in: {nextBreak}
        </p>
      </CardContent>
    </Card>
  );
}

