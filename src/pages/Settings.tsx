import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";

const Settings = () => {
    const [workTime, setWorkTime] = useState(25); // Default to 25 minutes
    const [breakTime, setBreakTime] = useState(5); // Default to 5 minutes

    return (
        <div className="flex justify-center items-center p-6">
            <Card className="w-[90vw]">
                <CardHeader className="items-center pb-12">
                    <CardTitle className="text-4xl">Settings</CardTitle>
                </CardHeader>
                <CardContent className="relative h-[65vh] gap-10 flex flex-col">
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-4xl">Work time</h1>
                        <Slider
                            defaultValue={[workTime]}
                            max={60}
                            step={1}
                            onValueChange={(value) => setWorkTime(value[0])} // Update workTime
                        />
                        <p className="text-xl">{workTime} minutes</p>
                    </div>
                    <div className="flex flex-col items-center gap-10">
                        <h1 className="text-4xl">Break time</h1>
                        <Slider
                            defaultValue={[breakTime]}
                            max={30}
                            step={1}
                            onValueChange={(value) => setBreakTime(value[0])} // Update breakTime
                        />
                        <p className="text-xl" >{breakTime} minutes</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default Settings;
