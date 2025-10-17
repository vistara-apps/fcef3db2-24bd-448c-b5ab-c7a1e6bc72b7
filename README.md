# DAO Lens - Onchain Governance for Communities

A Next.js Base Mini App for transparent, efficient, and Farcaster-native DAO management.

## Features

- 🗳️ **Proposal & Voting Frames** - Create and vote on proposals directly in Farcaster
- 💰 **Transparent Fund Management** - Track community funds onchain
- 👥 **Farcaster-Native Identity** - Seamless onboarding with Farcaster
- 🔔 **Real-time Updates** - Stay informed with notifications

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (Ethereum L2)
- **Wallet**: OnchainKit + Coinbase Wallet
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Configure environment**:
```bash
cp .env.local.example .env.local
# Add your OnchainKit API key
```

3. **Run development server**:
```bash
npm run dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
dao-lens/
├── app/
│   ├── components/       # Reusable UI components
│   ├── dao/[id]/        # DAO detail pages
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles with BASE theme
├── public/
│   └── .well-known/
│       └── farcaster.json  # Mini App manifest
└── package.json
```

## Key Components

- **ConnectWallet** - Wallet connection UI
- **DAOCard** - DAO preview card
- **ProposalCard** - Proposal display with voting
- **CreateDAOModal** - DAO creation form

## BASE Theme

The app uses the BASE theme with:
- Dark blue background (#0a1929)
- Base blue accents (#0052ff)
- Light text (#e3f2fd)
- Rounded borders (16px)

## Deployment

Deploy to Vercel or any Next.js-compatible platform:

```bash
npm run build
npm start
```

## License

MIT
