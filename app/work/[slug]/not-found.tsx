import Link from "next/link"

export default function WorkProjectNotFound() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-4 px-4">
      <h1 className="font-display text-2xl font-semibold">Project not found</h1>
      <p className="text-center text-muted-foreground">That work page does not exist.</p>
      <Link href="/#work" className="text-sm font-medium text-foreground underline underline-offset-4">
        Back to professional experience
      </Link>
    </div>
  )
}
