/**
 * Drop media into `public/projects/` (or subfolders). Set `imageSrc` for cards + detail hero; optional
 * `gallery` for extra items on the work detail page. Images: png/jpg/webp; screen recordings: mov/mp4/webm.
 */
export const person = {
  name: "Brian Joseph Keyrupan",
  title: "Full-stack Software Engineer",
  tagline:
    "Web apps across Web3, DeFi, NFT, and marketplaces — React/Next.js, NestJS, Python, PostgreSQL, Solidity, and AWS.",
  email: "bkeyrupan@gmail.com",
  phone: "+6281586688888",
  whatsapp: "https://wa.me/6281586688888",
  github: "https://github.com/brianjk17",
  linkedin: "https://www.linkedin.com/in/brian-jk",
} as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Solidity", "SQL"],
  },
  {
    label: "Frontend",
    items: [
      "React",
      "Next.js",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS",
      "React Native",
      "Vue.js",
    ],
  },
  {
    label: "Backend & data",
    items: [
      "NestJS",
      "PostgreSQL",
      "Drizzle ORM",
      "Alembic",
      "Dagster",
      "REST",
      "GraphQL",
      "Supabase",
      "OAuth",
    ],
  },
  {
    label: "Web3",
    items: [
      "Solidity",
      "Foundry",
      "Viem",
      "Wagmi",
      "JSON-RPC",
      "ERC-721",
      "ERC-1155",
      "ERC-165",
    ],
  },
  {
    label: "Infra",
    items: [
      "AWS SQS",
      "AWS KMS",
      "Redis",
      "Lambda",
      "Docker",
      "Slack bots",
      "Swagger",
    ],
  },
] as const;

export type ProjectDetailSection = {
  title: string;
  bullets: string[];
};

export type CompanyLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  name: string;
  summary: string;
  /** Where this shipped (employer / program) */
  context: string;
  /** Optional live product link */
  href?: string;
  /** Extra outbound links (e.g. social) shown beside the primary `href` */
  links?: CompanyLink[];
  /** Relative path under `public/`, e.g. `/projects/havenfi.png` */
  imageSrc?: string;
  /** Additional images or videos on `/work/[slug]` only (e.g. `.mov` screen recordings) */
  gallery?: string[];
  stack: string[];
  /** Dedicated `/work/[slug]` page */
  detail: {
    intro: string;
    sections: ProjectDetailSection[];
  };
};

export type ExperienceBlock = {
  title?: string;
  /** Sub-engagement dates (e.g. a client project window inside the role) */
  period?: string;
  href?: string;
  links?: CompanyLink[];
  bullets: string[];
};

export type Experience = {
  role: string;
  company: string;
  team?: string;
  period: string;
  companyLinks?: CompanyLink[];
  blocks: ExperienceBlock[];
};

export const projects: Project[] = [
  {
    slug: "havenfi",
    name: "Havenfi",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "DeFi dashboard with TanStack Router/Query, wallet flows (wagmi, viem, Reown), charts, and NestJS APIs for vaults, Morpho-backed markets, prices, and admin.",
    href: "https://app.havenfi.co/dashboard",
    imageSrc: "/projects/havenfi-overview.png",
    gallery: ["/projects/havenfi-vaults.png", "/projects/havenfi-landing.png"],
    stack: ["React", "NestJS", "Tailwind", "Wagmi", "Viem", "Morpho"],
    detail: {
      intro:
        "Havenfi is a DeFi-facing product surface where users explore vaults, Morpho-powered markets, and risk-aware metrics with a wallet-connected experience backed by production APIs.",
      sections: [
        {
          title: "Frontend & UX",
          bullets: [
            "Shipped a React dashboard with TanStack Router (file-based routes) and TanStack Query for cached server state, charts (Recharts), and Tailwind 4 + shadcn/Radix UI aligned to a design system.",
            "Implemented wallet connectivity and chain-aware reads with wagmi, viem, and Reown AppKit.",
          ],
        },
        {
          title: "Backend & integrations",
          bullets: [
            "Developed and maintained REST endpoints in NestJS for domains including vaults, markets, token prices, users, auth, admin, audit, and reallocation-related flows; used Swagger for API documentation.",
            "Markets backed by Morpho protocol integration for lending-market data, protocol-aware surfacing in the app, and on-chain reads.",
            "Python repo deploying Hypernative risk agents for HavenFi: APY monitoring, oracle vs reference price checks, and Morpho-related on-chain reads.",
          ],
        },
      ],
    },
  },
  {
    slug: "collect-fun",
    name: "Collect Fun",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "Gacha mystery packs tied to real PSA-graded inventory — BrainCloud game backend, Next.js experience, NestJS payments, on-chain collectibles, and in-app claims that route physical slabs to collectors.",
    href: "https://play.collectfun.co/",
    links: [
      { label: "Instagram", href: "https://www.instagram.com/collectfun.tcg/" },
    ],
    imageSrc: "/projects/collectfun/Screenshot 2026-05-15 at 22.40.33.png",
    gallery: [
      "/projects/collectfun/Screenshot 2026-05-15 at 22.41.25.png",
      "/projects/collectfun/Screenshot 2026-05-15 at 22.42.29.png",
      "/projects/collectfun/Screenshot 2026-05-15 at 22.42.42.png",
      "/projects/collectfun/Screen Recording 2026-05-15 at 23.14.01.mov",
    ],
    stack: ["Next.js", "NestJS", "BrainCloud", "Web3", "Payments"],
    detail: {
      intro:
        "Collect Fun is a collector-facing web product where every card surfaced through gacha-style mystery packs is backed by real PSA-graded Pokémon slabs and sealed product the team actually holds. BrainCloud runs the game layer behind the app; a Next.js frontend delivers the experience, and NestJS owns payments and service integration. Digital collectibles, inventory, and trading extend the loop on-chain where the product calls for it. When someone pulls a physical slab, they move through in-app claim and intake forms so the team can validate the win and ship the graded card.",
      sections: [
        {
          title: "Product & fulfillment",
          bullets: [
            "Pack openings and inventory are designed around real-world stock: outcomes in the gacha map to PSA cards the business controls, not purely synthetic drops.",
            "Physical claims are handled through structured flows in the app—collectors submit the details needed for verification and shipping once they are eligible for a slab.",
          ],
        },
        {
          title: "Stack & integrations",
          bullets: [
            "Next.js for the end-user marketplace and pack-opening experience.",
            "NestJS for payments, account flows, and orchestration with BrainCloud’s managed game backend.",
            "On-chain layers for collectibles, inventory, and trading paired with operational processes for physical fulfillment.",
          ],
        },
        {
          title: "Impact",
          bullets: [
            "Shipped a complete loop from purchase and BrainCloud-backed pack logic to digital ownership surfaces and real-world PSA delivery—bridging Web3-style collecting with accountable physical inventory.",
            "Reduced operational friction by keeping claims, verification context, and fulfillment handoff inside the product instead of ad-hoc support threads.",
          ],
        },
      ],
    },
  },
  {
    slug: "holodeck",
    name: "Holodeck",
    context: "Mon Co. — internal tooling",
    summary:
      "Internal dashboard connecting Binance, Bybit, Gate, MEXC, and Ethereum-family read-only wallets — unified totals, volume, holdings, Recharts allocation views, recent transactions, and a Slack PR bot.",
    imageSrc: "/projects/holodeck/holodeck-dashboard.png",
    gallery: [
      "/projects/holodeck/holodeck-dex.png",
      "/projects/holodeck/holodeck-transactions.png",
    ],
    stack: ["React", "Recharts", "Exchange APIs", "Ethereum"],
    detail: {
      intro:
        "Internal dashboard app that connects Binance, Bybit, Gate, MEXC (API keys) and Ethereum-family addresses (read-only), then surfaces unified totals, 24h volume, daily change, holdings, allocation charts (Recharts), and recent transactions.",
      sections: [
        {
          title: "Infrastructure",
          bullets: [
            "AI Agent Slack bot for automated pull request generation, streamlining content workflows.",
          ],
        },
      ],
    },
  },
  {
    slug: "shiny-rwa",
    name: "Shiny RWA",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "NFT redemption and marketplace infrastructure for PSA-graded Pokémon cards — NestJS admin systems and ERC-721AC / ERC-1155 / ERC-165 contracts.",
    href: "https://sequence.xyz/blog/sequence-powers-collectshiny-pokemon-marketplace",
    imageSrc: "/projects/shiny/shiny-cards.png",
    gallery: ["/projects/shiny/shiny-login.png"],
    stack: ["NestJS", "Solidity", "NFT", "ERC-721AC"],
    detail: {
      intro:
        "NFT redemption and marketplace infrastructure for PSA-graded Pokémon cards, with NestJS admin systems and ERC721AC / ERC1155 / ERC165 contracts.",
      sections: [
        {
          title: "Product & contracts",
          bullets: [
            "Designed the NFT redemption and marketplace infrastructure for PSA-graded Pokémon cards.",
            "Developed smart contracts (ERC721AC, ERC1155, ERC165) for NFT management and access control.",
          ],
        },
        {
          title: "Backend",
          bullets: [
            "Built robust backend systems using NestJS and TypeScript for admin panel functionality.",
          ],
        },
      ],
    },
  },
  {
    slug: "mon-launchpool",
    name: "Mon Protocol Launchpool",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "Token distribution platform on Next.js; smart contracts across 10+ mainnets; admin tooling — partnerships with 30+ projects and $6M+ in distributed tokens.",
    href: "https://app.pixelmon.ai/launchpool",
    imageSrc: "/projects/launchpool/Screenshot 2026-05-15 at 03.12.59.png",
    gallery: [
      "/projects/launchpool/trimmed.mov",
      "/projects/launchpool/Screen Recording 2026-05-16 at 16.14.09.mov",
      "/projects/launchpool/Screen Recording 2024-10-22 at 14.40.33.mov",
    ],
    stack: ["Next.js", "Solidity", "Multi-chain"],
    detail: {
      intro:
        "Token distribution platform on Next.js and TypeScript with smart contracts across many EVM networks, admin tooling for operations, and large-scale partner campaigns.",
      sections: [
        {
          title: "Delivery",
          bullets: [
            "Developed the frontend in Next.js and TypeScript for the token distribution platform.",
            "Developed and deployed smart contracts across 10+ mainnets (Ethereum, Base, Blast, Arbitrum, BNB, Optimism).",
            "Built a comprehensive admin panel for business operations and reward management.",
          ],
        },
        {
          title: "Impact",
          bullets: [
            "Facilitated partnerships with 30+ projects, distributing $6M+ worth of tokens to users.",
          ],
        },
      ],
    },
  },
  {
    slug: "pixelmon-e3-evolution",
    name: "Pixelmon E3 Evolution",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "Evolution 3 for Pixelmon — owners purchase Serum 3 as ERC-1155 tokens, burn them on-chain to evolve Evolution 2 Pixelmon into Evolution 3; audited Solidity and holder app. 438 NFTs evolved.",
    href: "https://www.pixelmon.ai/wiki/zoology",
    imageSrc: "/projects/e3/Screenshot 2025-02-06 at 11.22.58.png",
    gallery: [
      "/projects/e3/Screen Recording 2025-02-06 at 11.15.00.mov",
      "/projects/e3/Screen Recording 2025-02-11 at 14.50.22.mov",
      "/projects/e3/Screen Recording 2026-05-15 at 02.59.47.mov",
    ],
    stack: ["Solidity", "Next.js", "ERC-721", "ERC-1155", "Web3"],
    detail: {
      intro:
        "Evolution 3 extends Pixelmon on-chain: collectors purchase Serum 3 as ERC-1155 tokens, then burn Serum 3 to evolve an Evolution 2 Pixelmon they hold into its Evolution 3 form (minted in the same flow). A dedicated app walks owners through wallet connection, eligibility, signing, and transaction status.",
      sections: [
        {
          title: "Smart contracts & security",
          bullets: [
            "Designed and implemented the evolution flow: burn Serum 3 (ERC-1155) and mint Evolution 3 from the paired Evolution 2 Pixelmon the owner holds, with access rules aligned to the product spec.",
            "Prepared the contracts for external audit and incorporated findings so the deployment path met production bar.",
          ],
        },
        {
          title: "Frontend",
          bullets: [
            "Built the Evolution 3 frontend so owners with Serum 3 (ERC-1155) and an Evolution 2 Pixelmon can connect a wallet, confirm requirements, and complete the evolve transaction with clear status and error handling.",
          ],
        },
        {
          title: "Impact",
          bullets: [
            "438 Evolution 2 Pixelmon NFTs were evolved on-chain through the Evolution 3 launch.",
          ],
        },
      ],
    },
  },
  {
    slug: "mon-id",
    name: "MON ID",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "MON ID storefront for buying in-game currency for Wardens Ascent and Pixelmon TCG — on-chain checkout with Thirdweb (wallet, SIWE, AA with gas sponsorship), plus a NestJS payments API for EIP-712 intents, Drizzle/PostgreSQL, Redis, SQS, and KMS-backed signing.",
    imageSrc: "/projects/monid/Screenshot 2026-05-16 at 16.39.31.png",
    gallery: ["/projects/monid/monid recording.mov"],
    stack: ["Next.js", "NestJS", "Thirdweb", "Drizzle", "PostgreSQL", "AWS"],
    detail: {
      intro:
        "MON ID is the commerce layer players use to purchase in-game currencies for Wardens Ascent and Pixelmon TCG: a production web app for discovering those titles, browsing shop inventory, and completing checkout on-chain, backed by a NestJS payments service that records EIP-712–signed purchase intents, reconciles sales against contracts, and runs async processing with strong auth and observability.",
      sections: [
        {
          title: "Frontend (NextJS)",
          bullets: [
            "Shipped a Next.js storefront focused on Wardens Ascent and Pixelmon TCG — surfacing games, shop inventory, and flows to buy in-game currency with on-chain checkout for digital goods.",
            "Integrated Thirdweb for ecosystem wallet flows, SIWE-backed authentication, and account abstraction with gas sponsorship.",
            "Implemented a typed client layer against MON ID, Auth Sphere, and payments APIs; used TanStack Query and Jotai for server and UI state, Zod-validated environment configuration, and the shared Mon UI design system.",
            "Wired Google Tag Manager for marketing and analytics; built responsive layouts for store and checkout, multi-chain configuration (e.g. Avalanche and Base for token and sale contracts), top-up flows, and transaction history with filtering.",
          ],
        },
        {
          title: "Payments API (NestJS)",
          bullets: [
            "Built a TypeScript/NestJS payments API that accepts EIP-712–signed purchase intents for those in-game currency sales across multiple EVM chains.",
            "Persisted intents, webhooks, price pegs, and append-only state transitions in PostgreSQL via Drizzle ORM, with Redis caching.",
            "Integrated AWS SQS for asynchronous payment processing and AWS KMS (via viem and a KMS signer) for secure signing; used viem for receipt and log validation against sale contracts.",
            "Exposed versioned REST endpoints with Swagger; JWT (JWKS) and API key authentication; HMAC-verified indexer webhooks (e.g. Alchemy and custom indexers); structured Winston logging, health probes, and Jest tests in CI.",
          ],
        },
      ],
    },
  },
  {
    slug: "gvrn",
    name: "GVRN",
    context: "Mon Co. — Mon Protocol Team",
    summary:
      "Built a responsive frontend dashboard in Next.js improving access for the GVRN frontend experience.",
    href: "https://www.gvrn.ai",
    imageSrc: "/projects/gvrn/gvrn-hero.png",
    stack: ["Next.js", "React"],
    detail: {
      intro:
        "GVRN needed a responsive dashboard layer so users could access core app functionality clearly across devices.",
      sections: [
        {
          title: "Contribution",
          bullets: [
            "Built a responsive frontend dashboard in Next.js focused on layout, navigation, and access patterns for the broader GVRN product.",
          ],
        },
      ],
    },
  },
];

export function getWorkProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getWorkProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export const experiences: Experience[] = [
  {
    role: "Software Engineer",
    company: "Mon Co. (formerly LiquidX)",
    team: "Mon Protocol Team",
    period: "Mar 2024 – Present",
    companyLinks: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/themonco" },
      { label: "Website", href: "https://www.mon.co/" },
    ],
    blocks: [
      {
        title: "Yield Monitoring Service",
        bullets: [
          "Designed and implemented a Dagster pipeline (assets, jobs, schedules, asset checks, sensors) for market snapshots and risk/metrics computation, stored in PostgreSQL with Alembic migrations for schema evolution.",
          "Integrated multiple DeFi protocols (Morpho, Aave, Athena, Hyperliquid) via JSON-RPC / Web3, GraphQL, and typed protocol clients; modeled shared abstractions for ingestion and configuration.",
          "Built downstream analytics with pandas, numpy, and quantstats (e.g. rolling returns, volatility, Sharpe ratio, Sortino ratio, liquidity, and utilization metrics). Added operational reliability: configurable Slack run-failure sensors on critical jobs.",
        ],
      },
      {
        title: "Havenfi",
        href: "https://app.havenfi.co/dashboard",
        bullets: [
          "Shipped a React dashboard with TanStack Router (file-based routes) and TanStack Query for cached server state, charts (Recharts), and Tailwind 4 + shadcn/Radix UI aligned to a design system.",
          "Implemented wallet connectivity and chain-aware reads with wagmi, viem, and Reown AppKit.",
          "Developed and maintained REST endpoints in NestJS for domains including vaults, markets, token prices, users, auth, admin, audit, and reallocation-related flows; used Swagger for API documentation.",
          "Python repo deploying Hypernative risk agents for HavenFi: APY monitoring, oracle vs reference price checks, and Morpho-related on-chain reads.",
        ],
      },
      {
        title: "Collect Fun",
        links: [
          { label: "Live app", href: "https://play.collectfun.co/" },
          {
            label: "Instagram",
            href: "https://www.instagram.com/collectfun.tcg/",
          },
        ],
        bullets: [
          "Shipped a gacha-style mystery pack experience where pulls are backed by real PSA-graded Pokémon inventory; BrainCloud powers the game backend, with Next.js for the web app and NestJS for payments and integrations.",
          "Built in-app claim and intake flows so collectors who win physical slabs can submit shipping details and the team can verify outcomes before fulfilling graded cards.",
          "Impact: connected on-chain collectibles and marketplace flows to accountable physical stock—end to end from pack opening through digital inventory to shipped PSA slabs with less manual back-and-forth.",
        ],
      },
      {
        title: "Holodeck",
        bullets: [
          "Internal dashboard app that connects Binance, Bybit, Gate, MEXC (API keys) and Ethereum-family addresses (read-only), then shows unified totals, 24h volume, daily change, holdings, allocation charts (Recharts), and recent transactions.",
          "Infrastructure: AI Agent Slack bot for automated pull request generation, streamlining content workflows.",
        ],
      },
      {
        title: "Shiny RWA Platform",
        href: "https://sequence.xyz/blog/sequence-powers-collectshiny-pokemon-marketplace",
        bullets: [
          "Designed the NFT redemption and marketplace infrastructure for PSA-graded Pokémon cards.",
          "Built robust backend systems using NestJS and TypeScript for admin panel functionality.",
          "Developed smart contracts (ERC721AC, ERC1155, ERC165) for NFT management and access control.",
        ],
      },
      {
        title: "Mon Protocol Launchpool",
        href: "https://app.pixelmon.ai/launchpool",
        bullets: [
          "Developed the frontend in Next.js and TypeScript for the token distribution platform.",
          "Developed and deployed smart contracts across 10+ mainnets (Ethereum, Base, Blast, Arbitrum, BNB, Optimism).",
          "Impact: facilitated partnerships with 30+ projects, distributing $6M+ worth of tokens to users.",
          "Built a comprehensive admin panel for business operations and reward management.",
        ],
      },
      {
        title: "Pixelmon E3 Evolution",
        href: "https://www.pixelmon.ai/wiki/zoology",
        bullets: [
          "Developed audited Solidity for Evolution 3: collectors burn Serum 3 (ERC-1155) to evolve Evolution 2 Pixelmon into Evolution 3 on-chain, with rules and flows aligned to the product spec.",
          "Built the Evolution 3 frontend so owners can complete the on-chain evolution with clear wallet flows, ERC-1155 Serum 3 and Evolution 2 requirements, and transaction feedback.",
          "Impact: 438 Evolution 2 Pixelmon NFTs evolved through the launch.",
        ],
      },

      {
        title: "MON ID",
        bullets: [
          "Built the production Next.js MON ID storefront so players can buy in-game currency for Wardens Ascent and Pixelmon TCG — game discovery, shop inventory, and on-chain checkout — with Thirdweb (ecosystem wallet, SIWE-backed auth, account abstraction with gas sponsorship), typed clients to MON ID, Auth Sphere, and payments APIs, TanStack Query and Jotai, Zod-validated environment config and Mon UI.",
          "Shipped multi-chain configuration (e.g. Avalanche and Base for token and sale contracts), top-up flows, transaction history with filtering, and responsive layouts for store and checkout.",
          "Implemented the TypeScript/NestJS payments API for EIP-712–signed purchase intents across multiple EVM chains — Drizzle/PostgreSQL for intents, webhooks, price pegs, and append-only state transitions; Redis; AWS SQS and KMS-backed signing with viem for receipt and log validation against sale contracts.",
          "Exposed versioned REST with Swagger, JWT and API key auth, HMAC-verified indexer webhooks (Alchemy and custom indexers).",
        ],
      },
      {
        title: "Mon Protocol Questing",
        bullets: [
          "Revamped Questing UI and shipped smart contract integration for 15M $MON token distribution.",
        ],
      },
      {
        title: "GVRN",
        links: [
          {
            label: "LinkedIn",
            href: "https://www.linkedin.com/company/gvrn-ai/posts/?feedView=all",
          },
          { label: "Website", href: "https://www.gvrn.ai/" },
        ],
        bullets: [
          "Built a responsive frontend dashboard in Next.js focused on layout, navigation, and access patterns for the broader GVRN product.",
        ],
      },
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "F-Secure Malaysia",
    team: undefined,
    period: "Aug 2022 – Nov 2022",
    companyLinks: [
      { label: "Website", href: "https://www.f-secure.com/en" },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/f-secure-corporation/posts/?feedView=all",
      },
    ],
    blocks: [
      {
        bullets: [
          "Migrated R&D backends to Docker and built automated testing with Python and Robot Framework.",
        ],
      },
    ],
  },
];

export type HackathonEntry = {
  id: string;
  name: string;
  event: string;
  date: string;
  detail: string;
  href: string;
};

export const hackathons: HackathonEntry[] = [
  {
    id: "predpump",
    name: "PredPump",
    event: "ETHGlobal Thailand",
    date: "Nov 2024",
    detail:
      "Open prediction market — 4th Scroll, Push bounty, Blockscout prize.",
    href: "https://ethglobal.com/showcase/predpump-q8gxc",
  },
  {
    id: "reversifi",
    name: "ReversiFi",
    event: "ETHGlobal Singapore",
    date: "Aug 2024",
    detail: "Non-custodial crypto payment SDK.",
    href: "https://ethglobal.com/showcase/reversifi-ufprn",
  },
  {
    id: "fiatx",
    name: "FiatX",
    event: "ETHGlobal Sydney",
    date: "May 2024",
    detail: "P2P fiat ramp with World ID and Chainlink VRF.",
    href: "https://ethglobal.com/showcase/fiatx-drggu",
  },
  {
    id: "footy-stars",
    name: "Footy Stars",
    event: "ETHGlobal Istanbul",
    date: "Nov 2023",
    detail:
      "Provable football sim with ZKPs and EZKL — finalist, 2nd SportFi, Best on Scroll.",
    href: "https://ethglobal.com/showcase/footy-stars-zw8ug",
  },
];

export type PersonalProject = {
  id: string;
  name: string;
  kind: string;
  detail: string;
  stack: string[];
  href?: string;
};

export const personalProjects: PersonalProject[] = [
  {
    id: "solana-blind-box",
    name: "Solana meme coin blind box",
    kind: "Web app",
    detail:
      "Users buy random coins from configurable boxes (e.g. graduated tokens above a market cap). Jito bundler batches swap transactions from the Jupiter API; NestJS backend.",
    stack: ["Solana", "Jupiter", "Jito", "NestJS"],
  },
  {
    id: "solana-tweet-swap",
    name: "Solana token swap extension",
    kind: "Chrome extension",
    detail:
      "Detects token addresses in tweets, surfaces price data, and enables swaps via Jupiter APIs.",
    stack: ["Chrome extension", "Jupiter API", "TypeScript"],
  },
];

export const education = {
  school: "Asia Pacific University of Technology and Innovation (APU)",
  location: "Malaysia",
  degree: "Bachelor of Software Engineering",
  period: "Nov 2020 – Nov 2023",
  detail: "CGPA 3.5",
} as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#personal-projects", label: "Personal" },
  { href: "#education", label: "Education" },
] as const;
