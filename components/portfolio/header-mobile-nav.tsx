"use client"

import Link from "next/link"
import { useCallback, useEffect, useId, useState } from "react"
import { createPortal } from "react-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavLinkItem = { readonly href: string; readonly label: string }

type Props = {
  links: readonly NavLinkItem[]
  cta?: { href: string; label: string }
}

export function HeaderMobileNav({
  links,
  cta = { href: "#contact", label: "Let's talk" },
}: Props) {
  const [open, setOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuId = useId()

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, close])

  const overlay =
    mounted &&
    createPortal(
      <>
        <div
          className={cn(
            "fixed inset-x-0 top-14 bottom-0 z-44 bg-background/45 backdrop-blur-sm transition-opacity duration-300 ease-out md:hidden",
            open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden
          onClick={close}
        />
        <aside
          id={menuId}
          className={cn(
            "fixed top-14 right-0 bottom-0 z-45 flex w-[min(100vw,20rem)] flex-col border-l border-border/80 bg-background/95 shadow-2xl backdrop-blur-md transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden",
            open ? "translate-x-0" : "translate-x-full",
            !open && "pointer-events-none",
          )}
          inert={!open}
          aria-hidden={!open}
        >
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-4 pt-2" aria-label="Primary mobile">
            {links.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className={cn(
                  "rounded-2xl px-4 py-3 text-base font-medium text-muted-foreground transition-all duration-300 ease-out hover:bg-muted hover:text-foreground",
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0",
                )}
                style={{
                  transitionDelay: open ? `${60 + i * 45}ms` : "0ms",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="border-t border-border/60 p-4">
            <Button asChild size="lg" className="w-full rounded-2xl">
              <Link href={cta.href} onClick={close}>
                {cta.label}
              </Link>
            </Button>
          </div>
        </aside>
      </>,
      document.body,
    )

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon-sm"
        className="rounded-2xl md:hidden"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="relative block size-4 shrink-0">
          <span
            className={cn(
              "absolute left-0 top-0 block h-0.5 w-4 rounded-full bg-foreground transition-all duration-300 ease-in-out",
              open ? "top-[7px] rotate-45" : "rotate-0",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "absolute left-0 top-[7px] block h-0.5 w-4 rounded-full bg-foreground transition-all duration-200 ease-out",
              open ? "scale-x-0 opacity-0" : "scale-x-100 opacity-100",
            )}
            aria-hidden
          />
          <span
            className={cn(
              "absolute left-0 top-[14px] block h-0.5 w-4 rounded-full bg-foreground transition-all duration-300 ease-in-out",
              open ? "top-[7px] -rotate-45" : "rotate-0",
            )}
            aria-hidden
          />
        </span>
      </Button>
      {overlay}
    </>
  )
}
