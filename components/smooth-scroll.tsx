"use client"

import { usePathname } from "next/navigation"
import { useEffect } from "react"

/** Matches section `scroll-mt-20` (5rem) for sticky header clearance */
const SCROLL_OFFSET_PX = 80

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function scrollBehavior(): ScrollBehavior {
  return prefersReducedMotion() ? "auto" : "smooth"
}

export function scrollToHash(hash: string, behavior?: ScrollBehavior) {
  const motion = behavior ?? scrollBehavior()
  const id = hash.replace(/^#/, "")

  if (!id || id === "top") {
    window.scrollTo({ top: 0, behavior: motion })
    return
  }

  const target = document.getElementById(id)
  if (!target) return

  const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET_PX
  window.scrollTo({ top: Math.max(0, top), behavior: motion })
}

function hashFromAnchor(anchor: HTMLAnchorElement): string | null {
  const href = anchor.getAttribute("href")
  if (!href) return null

  if (href.startsWith("#")) return href

  try {
    const url = new URL(href, window.location.href)
    if (url.origin !== window.location.origin) return null
    if (url.pathname !== window.location.pathname) return null
    return url.hash || null
  } catch {
    return null
  }
}

export function SmoothScroll() {
  const pathname = usePathname()

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return

      const anchor = (event.target as HTMLElement).closest("a")
      if (!anchor) return

      const hash = hashFromAnchor(anchor)
      if (!hash) return

      event.preventDefault()
      history.pushState(null, "", hash)
      scrollToHash(hash)
    }

    document.addEventListener("click", onClick)
    return () => document.removeEventListener("click", onClick)
  }, [pathname])

  useEffect(() => {
    const hash = window.location.hash
    if (!hash) return

    const id = window.requestAnimationFrame(() => {
      scrollToHash(hash, prefersReducedMotion() ? "auto" : "smooth")
    })
    return () => window.cancelAnimationFrame(id)
  }, [pathname])

  return null
}
