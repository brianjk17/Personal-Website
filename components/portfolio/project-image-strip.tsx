"use client"

import Image from "next/image"
import { useCallback, useRef, useState } from "react"

import { cn } from "@/lib/utils"

type Props = {
  projectName: string
  images: string[]
}

function publicPath(src: string) {
  return encodeURI(src)
}

function isVideoSrc(src: string) {
  return /\.(mov|mp4|webm|m4v|ogv)(\?|#|$)/i.test(src)
}

export function ProjectImageStrip({ projectName, images }: Props) {
  const elRef = useRef<HTMLDivElement>(null)
  const drag = useRef({
    active: false,
    pointerId: 0,
    startX: 0,
    startScroll: 0,
  })
  const [dragging, setDragging] = useState(false)

  const endDrag = useCallback((e: React.PointerEvent) => {
    if (!drag.current.active || e.pointerId !== drag.current.pointerId) {
      return
    }
    drag.current.active = false
    const el = elRef.current
    if (el?.hasPointerCapture(e.pointerId)) {
      el.releasePointerCapture(e.pointerId)
    }
    setDragging(false)
  }, [])

  const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "touch") {
      return
    }
    if (e.button !== 0) {
      return
    }
    if ((e.target as HTMLElement | null)?.closest("video")) {
      return
    }
    const el = elRef.current
    if (!el) {
      return
    }
    drag.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startScroll: el.scrollLeft,
    }
    el.setPointerCapture(e.pointerId)
    setDragging(true)
  }, [])

  const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    if (!drag.current.active || e.pointerId !== drag.current.pointerId) {
      return
    }
    const el = elRef.current
    if (!el) {
      return
    }
    const dx = e.clientX - drag.current.startX
    el.scrollLeft = drag.current.startScroll - dx
    e.preventDefault()
  }, [])

  const hasVideo = images.some(isVideoSrc)

  return (
    <div className="-mx-4 mt-8 sm:-mx-6">
      <div
        ref={elRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className={cn(
          "flex gap-4 overflow-x-auto overflow-y-hidden px-4 pb-3 sm:gap-5 sm:px-6 sm:pb-4 scrollbar-thin",
          dragging
            ? "cursor-grabbing snap-none select-none scroll-auto"
            : "cursor-grab snap-x snap-mandatory scroll-smooth",
        )}
        tabIndex={0}
        role="region"
        aria-label={
          hasVideo
            ? `${projectName} screenshots and screen recordings — drag to scroll`
            : `${projectName} screenshots — drag to scroll`
        }
      >
        {images.map((src, i) => (
          <figure key={`${src}-${i}`} className="snap-center snap-always shrink-0">
            <div className="relative aspect-16/10 w-[min(85vw,36rem)] overflow-hidden rounded-2xl border border-border/80 bg-muted sm:w-[min(85vw,40rem)]">
              {isVideoSrc(src) ? (
                <video
                  src={publicPath(src)}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={`${projectName} screen recording ${i + 1} of ${images.length}`}
                  className="absolute inset-0 h-full w-full bg-black object-contain object-center"
                />
              ) : (
                <Image
                  src={publicPath(src)}
                  alt={`${projectName} product screenshot ${i + 1} of ${images.length}`}
                  fill
                  priority={i === 0}
                  draggable={false}
                  sizes="(max-width: 640px) 85vw, 40rem"
                  className="pointer-events-none object-contain object-center select-none"
                />
              )}
            </div>
          </figure>
        ))}
      </div>
      {images.length > 1 ? (
        <p className="px-4 text-center font-mono text-xs text-muted-foreground sm:px-6">
          Drag, swipe, or scroll horizontally
        </p>
      ) : null}
    </div>
  )
}
