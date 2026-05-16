"use client"

import { Moon02Icon, Sun03Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useTheme } from "next-themes"
import { useSyncExternalStore } from "react"

import { Button } from "@/components/ui/button"

function useIsClient() {
  return useSyncExternalStore(
    () => () => { },
    () => true,
    () => false,
  )
}

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isClient = useIsClient()

  if (!isClient) {
    return <Button variant="outline" size="icon-sm" className="rounded-2xl" aria-hidden disabled />
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-sm"
      className="rounded-2xl"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      <HugeiconsIcon icon={isDark ? Sun03Icon : Moon02Icon} className="size-4" strokeWidth={1.75} />
    </Button>
  )
}
