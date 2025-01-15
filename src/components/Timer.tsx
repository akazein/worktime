import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";


interface LogEntry {
    date: string;     
    elapsedTime: number; 
    stopTime: string;    
}



const Timer = () => {
    const [time, setTime] = useState(3);
    const [isRunning, setIsRunning] = useState(false);
    const [isBrake, setIsBrake] = useState(false);
    const [logs, setLogs] = useState<LogEntry[]>([]);
    let timer: NodeJS.Timeout;

    useEffect(() => {
        let timer: NodeJS.Timeout;

        if (isRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => {
                    console.log(logs);
                    if (prevTime === 0 && !isBrake) {
                        setIsRunning(false);
                        setIsBrake(true);
                        return 300;
                    } else if (prevTime === 0 && isBrake) {
                        setIsRunning(false);
                        setIsBrake(false);
                        return 1500;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }else{
            alert("Timer stopped");
        }

        return () => clearInterval(timer); 
    }, [isRunning, isBrake]);

    const startTimer = () => setIsRunning(true);
    const stopTimer = () => {
        if (isRunning) {

            setIsRunning(false); 
        }
    };
    const resetTimer = () => {
        setIsRunning(false);
        setTime(1500);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };

    return (
        <div className="text-center h-full flex items-center justify-center relative">
            <h1 className="text-9xl mb-4">{formatTime(time)}</h1>
            <div className="absolute flex flex-row space-x-3 left-1/2 transform -translate-x-1/2 bottom-0">
                <Button onClick={startTimer}>Start</Button>
                <Button onClick={stopTimer}>Stop</Button>
                <Button onClick={resetTimer}>Reset</Button>
            </div>
        </div>

    );
};

export default Timer;
