import type { ReactNode } from "react"

const HIGHLIGHT_PATTERN = /\*\*([^*]+)\*\*/g

export function HighlightedText({ text }: { text: string }) {
  const parts: ReactNode[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null
  const re = new RegExp(HIGHLIGHT_PATTERN)

  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    parts.push(
      <strong key={match.index} className="font-semibold text-foreground">
        {match[1]}
      </strong>,
    )
    lastIndex = match.index + match[0].length
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return <>{parts}</>
}
