"use client"
import { assets } from "@/utils/asset-utils"
import Image from "next/image"
import { frameworks, type Framework } from "@/utils/framework-utils"
import { useState, useEffect, use } from "react"
import { cn } from '@/utils/tailwind-utils'
import { Poppins } from "next/font/google"
import { FrameworkRotation } from "@/components/framework-rotation"

const poppins = Poppins({ weight: "700", subsets: ["latin"] })

export default function Home() {

  const [currentFramework, setFramework] = useState<Framework>(frameworks[0])

  const [showBackground, setShowBackground] = useState(false)

  useEffect(() => {
    let currentIndex = 0;
    const rotateFramework = () => {
      setFramework(frameworks[currentIndex])
      currentIndex = (currentIndex + 1) % frameworks.length
    }
    const intervalId = setInterval(rotateFramework, 3000)
    return () => clearInterval(intervalId)
  }, [])

  useEffect(() => {
    setShowBackground(true)
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
      <div className={cn("bg-black fixed inset-0 transition-opacity duration-[1500ms]",
        !showBackground ? "opacity-100" : "opacity-0")} />
      <div className="max-w-7xl mt-20 mx-auto">
        <div className="flex flex-col items-center relative z-10">
          <h1 className={`text-5xl max-w-3xl text-center leading-snug mb-12 ${poppins.className}`}>
            <Image alt="figma logo" className="inline-block mr-8 -mt-2" src={assets.figma} width={50} height={50} />
            to <FrameworkRotation currentFramework={currentFramework} /> will <span className={cn("transition-colors duration-200", {
              "text-purple-300": currentFramework === "qwik",
              "text-sky-300": currentFramework === "safari",
              "text-yellow-300": currentFramework === "chrome",
              "text-teal-300": currentFramework === "tailwind",
              "text-blue-300": currentFramework === "react",
              "text-green-300": currentFramework === "vue",
              "text-orange-400": currentFramework === "svelte",
              "text-red-300": currentFramework === "mobile",
              "text-neutral-300": currentFramework === "desktop",
            })}> never </span> be the same again
          </h1>
        </div>
      </div>
    </main>
  )
}
