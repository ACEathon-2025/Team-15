'use client'

import { ReactNode } from "react"
import clsx from "clsx"

interface VideoBackgroundProps {
  children: ReactNode
  className?: string
}

const VIDEO_SOURCE =
  "https://cdn.builder.io/o/assets%2Fdc007f73c126431b8bf59c1d23730980%2F663514a55c87491b8a7eee04b683e141?alt=media&token=a92516ed-5dd6-480c-9865-b16234eae471&apiKey=dc007f73c126431b8bf59c1d23730980"

export function VideoBackground({ children, className }: VideoBackgroundProps) {
  return (
    <div className={clsx("relative w-full overflow-hidden", className)}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={VIDEO_SOURCE}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  )
}
