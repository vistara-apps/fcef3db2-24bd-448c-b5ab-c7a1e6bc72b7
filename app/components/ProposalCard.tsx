'use client'

import { Vote, Clock, CheckCircle2, XCircle } from 'lucide-react'

interface ProposalCardProps {
  proposal: {
    id: string
    title: string
    description: string
    status: 'active' | 'passed' | 'failed'
    forVotes: number
    againstVotes: number
    abstainVotes: number
    endDate: string
  }
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const totalVotes = proposal.forVotes + proposal.againstVotes + proposal.abstainVotes
  const forPercentage = totalVotes > 0 ? (proposal.forVotes / totalVotes) * 100 : 0
  const againstPercentage = totalVotes > 0 ? (proposal.againstVotes / totalVotes) * 100 : 0

  const getStatusIcon = () => {
    switch (proposal.status) {
      case 'active':
        return <Clock className="w-5 h-5 text-blue-400" />
      case 'passed':
        return <CheckCircle2 className="w-5 h-5 text-green-400" />
      case 'failed':
        return <XCircle className="w-5 h-5 text-red-400" />
    }
  }

  const getStatusColor = () => {
    switch (proposal.status) {
      case 'active':
        return 'bg-blue-500/20 text-blue-400'
      case 'passed':
        return 'bg-green-500/20 text-green-400'
      case 'failed':
        return 'bg-red-500/20 text-red-400'
    }
  }

  return (
    <div className="bg-surface rounded-lg p-6 border border-white/10 hover:border-primary/50 transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {getStatusIcon()}
            <h3 className="text-lg font-bold text-fg">{proposal.title}</h3>
          </div>
          <p className="text-sm text-muted">{proposal.description}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor()}`}>
          {proposal.status}
        </span>
      </div>

      {/* Vote Progress */}
      <div className="space-y-3 mb-4">
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-green-400 font-medium">For</span>
            <span className="text-fg">{proposal.forVotes} votes ({forPercentage.toFixed(1)}%)</span>
          </div>
          <div className="h-2 bg-bg rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-300"
              style={{ width: `${forPercentage}%` }}
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-red-400 font-medium">Against</span>
            <span className="text-fg">{proposal.againstVotes} votes ({againstPercentage.toFixed(1)}%)</span>
          </div>
          <div className="h-2 bg-bg rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-500 transition-all duration-300"
              style={{ width: `${againstPercentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Actions */}
      {proposal.status === 'active' && (
        <div className="flex gap-3 pt-4 border-t border-white/10">
          <button className="flex-1 px-4 py-2 bg-green-500/20 text-green-400 rounded-lg font-medium hover:bg-green-500/30 transition-colors duration-200 flex items-center justify-center gap-2">
            <Vote className="w-4 h-4" />
            Vote For
          </button>
          <button className="flex-1 px-4 py-2 bg-red-500/20 text-red-400 rounded-lg font-medium hover:bg-red-500/30 transition-colors duration-200 flex items-center justify-center gap-2">
            <Vote className="w-4 h-4" />
            Vote Against
          </button>
          <button className="px-4 py-2 bg-surface text-muted rounded-lg font-medium hover:bg-surface/80 transition-colors duration-200 border border-white/10">
            Abstain
          </button>
        </div>
      )}

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
        <span className="text-xs text-muted">
          {proposal.status === 'active' ? `Ends ${proposal.endDate}` : `Ended ${proposal.endDate}`}
        </span>
        <span className="text-xs text-muted">{totalVotes} total votes</span>
      </div>
    </div>
  )
}
