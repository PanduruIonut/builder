"use client"
import { assets } from "@/utils/asset-utils"
import Image from "next/image"
import { frameworks, type Framework } from "@/utils/framework-utils"
import { useState, useEffect, use } from "react"
import { cn } from '@/utils/tailwind-utils'

export default function Home() {

  const [currentFramework, setFramework] = useState<Framework>(frameworks[0])

  useEffect(() => {
    let currentIndex = 0;
    const rotateFramework = () => {
      setFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length
    }
    const intervalId = setInterval(rotateFramework, 3000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <main>
      <div className={cn("fixed inset-0 transition-color delay-100 duration-700 opacity-25",
        {
          "bg-purple-300": currentFramework === "qwik",
          "bg-sky-300": currentFramework === "safari",
          "bg-yellow-300": currentFramework === "chrome",
          "bg-teal-300": currentFramework === "tailwind",
          "bg-blue-300": currentFramework === "react",
          "bg-green-300": currentFramework === "vue",
          "bg-orange-400": currentFramework === "svelte",
          "bg-red-300": currentFramework === "mobile",
          "bg-neutral-300": currentFramework === "desktop",
        })}>
      </div>
      <Image height={1200} width={1200} role={"presentation"} alt="gradient background" className="fixed inset-0 w-screen h-screen object-cover" src={assets.gradient} />
      <div className="fixed inset-0 opacity-30"
        style={{
          backgroundImage: `url(${assets.square})`,
          backgroundSize: "30px"
        }}
      />
    </main>
  )
}
