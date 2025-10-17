'use client'

import { use } from 'react'
import { ArrowLeft, Users, Wallet, Vote, Plus, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { ProposalCard } from '@/app/components/ProposalCard'

interface Proposal {
  id: string
  title: string
  description: string
  status: 'active' | 'passed' | 'failed'
  forVotes: number
  againstVotes: number
  abstainVotes: number
  endDate: string
}

const SAMPLE_PROPOSALS: Proposal[] = [
  {
    id: '1',
    title: 'Fund Community Garden Project',
    description: 'Allocate 2 ETH to establish a community garden in the central park area',
    status: 'active',
    forVotes: 45,
    againstVotes: 12,
    abstainVotes: 8,
    endDate: '2024-02-15'
  },
  {
    id: '2',
    title: 'Install Solar Panels on Community Center',
    description: 'Approve 5 ETH for solar panel installation to reduce energy costs',
    status: 'active',
    forVotes: 67,
    againstVotes: 23,
    abstainVotes: 5,
    endDate: '2024-02-20'
  },
  {
    id: '3',
    title: 'Monthly Community Events Budget',
    description: 'Establish recurring 0.5 ETH monthly budget for community events',
    status: 'passed',
    forVotes: 89,
    againstVotes: 15,
    abstainVotes: 3,
    endDate: '2024-01-30'
  }
]

export default function DAOPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center gap-4">
            <Link href="/" className="w-10 h-10 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors">
              <ArrowLeft className="w-5 h-5 text-fg" />
            </Link>
            <div>
              <h1 className="text-xl font-bold text-fg">Neighborhood Commons</h1>
              <p className="text-xs text-muted">Managing shared spaces and community events</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* DAO Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">127</p>
                <p className="text-sm text-muted">Members</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">15.5 ETH</p>
                <p className="text-sm text-muted">Treasury</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Vote className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">3</p>
                <p className="text-sm text-muted">Active Proposals</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">92%</p>
                <p className="text-sm text-muted">Participation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <button className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors duration-200 flex items-center justify-center gap-2">
            <Plus className="w-5 h-5" />
            Create Proposal
          </button>
          <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-colors duration-200 border border-white/10">
            View Treasury
          </button>
          <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-colors duration-200 border border-white/10">
            Member Directory
          </button>
        </div>

        {/* Proposals */}
        <div>
          <h2 className="text-2xl font-bold text-fg mb-6">Proposals</h2>
          <div className="space-y-4">
            {SAMPLE_PROPOSALS.map((proposal) => (
              <ProposalCard key={proposal.id} proposal={proposal} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
