'use client'

import { useState } from 'react'
import { X, Loader2 } from 'lucide-react'

interface CreateDAOModalProps {
  onClose: () => void
}

export function CreateDAOModal({ onClose }: CreateDAOModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    initialFunding: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate DAO creation
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-lg max-w-2xl w-full border border-white/10 shadow-xl">
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-fg">Create New DAO</h2>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-white/10 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-muted" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-fg mb-2">
              DAO Name *
            </label>
            <input
              id="name"
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="e.g., Neighborhood Commons"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-fg mb-2">
              Description *
            </label>
            <textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe your DAO's purpose and goals..."
              rows={4}
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
          </div>

          <div>
            <label htmlFor="funding" className="block text-sm font-medium text-fg mb-2">
              Initial Funding (ETH)
            </label>
            <input
              id="funding"
              type="number"
              step="0.01"
              min="0"
              value={formData.initialFunding}
              onChange={(e) => setFormData({ ...formData, initialFunding: e.target.value })}
              placeholder="0.00"
              className="w-full px-4 py-3 bg-bg border border-white/10 rounded-lg text-fg placeholder-muted focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <p className="text-xs text-muted mt-2">Optional: Add initial funds to the DAO treasury</p>
          </div>

          <div className="flex gap-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-surface text-fg rounded-lg font-semibold hover:bg-surface/80 transition-colors duration-200 border border-white/10"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Creating...
                </>
              ) : (
                'Create DAO'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
