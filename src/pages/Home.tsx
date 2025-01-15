import React from 'react'
import Timer from '@/components/Timer'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
const Home = () => {
  return (
    <div className="flex justify-center items-center p-12">
      <Card className="w-[90vw]">
        <CardHeader className="items-center">
          <CardTitle className="text-4xl">Work Timer</CardTitle>
        </CardHeader>
        <CardContent className="relative h-[60vh]">
          <Timer />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>
    </div>

  )
}

export default Home