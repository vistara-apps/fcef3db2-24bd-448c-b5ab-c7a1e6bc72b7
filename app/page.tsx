'use client'

import { useEffect, useState } from 'react'
import { Wallet, Users, Vote, TrendingUp, Plus, Search } from 'lucide-react'
import { ConnectWallet } from './components/ConnectWallet'
import { DAOCard } from './components/DAOCard'
import { CreateDAOModal } from './components/CreateDAOModal'

interface DAO {
  id: string
  name: string
  description: string
  memberCount: number
  treasuryBalance: string
  activeProposals: number
  status: 'active' | 'pending'
}

const SAMPLE_DAOS: DAO[] = [
  {
    id: '1',
    name: 'Neighborhood Commons',
    description: 'Managing shared spaces and community events in downtown',
    memberCount: 127,
    treasuryBalance: '15.5',
    activeProposals: 3,
    status: 'active'
  },
  {
    id: '2',
    name: 'Green Initiative DAO',
    description: 'Funding local sustainability and environmental projects',
    memberCount: 89,
    treasuryBalance: '8.2',
    activeProposals: 2,
    status: 'active'
  },
  {
    id: '3',
    name: 'Arts & Culture Collective',
    description: 'Supporting local artists and cultural events',
    memberCount: 156,
    treasuryBalance: '22.7',
    activeProposals: 5,
    status: 'active'
  }
]

export default function Home() {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [filteredDAOs, setFilteredDAOs] = useState(SAMPLE_DAOS)

  useEffect(() => {
    const filtered = SAMPLE_DAOS.filter(dao =>
      dao.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dao.description.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setFilteredDAOs(filtered)
  }, [searchQuery])

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <header className="border-b border-white/10 bg-surface/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Vote className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-fg">DAO Lens</h1>
                <p className="text-xs text-muted">Community Governance</p>
              </div>
            </div>
            <ConnectWallet />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-fg mb-4">
            Onchain Governance for
            <span className="text-primary"> Local Communities</span>
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto mb-8">
            Transparent, efficient, and Farcaster-native platform for managing DAOs, 
            making collective decisions, and allocating funds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsCreateModalOpen(true)}
              className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Plus className="w-5 h-5" />
              Create New DAO
            </button>
            <button className="px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-colors duration-200 border border-white/10">
              Browse DAOs
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">372</p>
                <p className="text-sm text-muted">Total Members</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Vote className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">10</p>
                <p className="text-sm text-muted">Active Proposals</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <Wallet className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">46.4 ETH</p>
                <p className="text-sm text-muted">Total Treasury</p>
              </div>
            </div>
          </div>
          <div className="bg-surface rounded-lg p-6 border border-white/10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-fg">94%</p>
                <p className="text-sm text-muted">Participation Rate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              placeholder="Search DAOs by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface border border-white/10 rounded-lg text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>

        {/* DAOs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDAOs.map((dao) => (
            <DAOCard key={dao.id} dao={dao} />
          ))}
        </div>

        {filteredDAOs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted text-lg">No DAOs found matching your search.</p>
          </div>
        )}
      </section>

      {/* Create DAO Modal */}
      {isCreateModalOpen && (
        <CreateDAOModal onClose={() => setIsCreateModalOpen(false)} />
      )}
    </div>
  )
}
