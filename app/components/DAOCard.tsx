'use client'

import { Users, Wallet, Vote, ArrowRight } from 'lucide-react'
import Link from 'next/link'

interface DAOCardProps {
  dao: {
    id: string
    name: string
    description: string
    memberCount: number
    treasuryBalance: string
    activeProposals: number
    status: 'active' | 'pending'
  }
}

export function DAOCard({ dao }: DAOCardProps) {
  return (
    <Link href={`/dao/${dao.id}`}>
      <div className="bg-surface rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-all duration-200 cursor-pointer group">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-fg mb-2 group-hover:text-primary transition-colors">
              {dao.name}
            </h3>
            <p className="text-sm text-muted line-clamp-2">{dao.description}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            dao.status === 'active' 
              ? 'bg-green-500/20 text-green-400' 
              : 'bg-yellow-500/20 text-yellow-400'
          }`}>
            {dao.status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-muted" />
            <div>
              <p className="text-sm font-semibold text-fg">{dao.memberCount}</p>
              <p className="text-xs text-muted">Members</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Wallet className="w-4 h-4 text-muted" />
            <div>
              <p className="text-sm font-semibold text-fg">{dao.treasuryBalance} ETH</p>
              <p className="text-xs text-muted">Treasury</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Vote className="w-4 h-4 text-muted" />
            <div>
              <p className="text-sm font-semibold text-fg">{dao.activeProposals}</p>
              <p className="text-xs text-muted">Proposals</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <span className="text-sm text-primary font-medium group-hover:text-accent transition-colors">
            View Details
          </span>
          <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  )
}
