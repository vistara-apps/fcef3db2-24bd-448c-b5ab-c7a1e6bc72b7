'use client'

import { useState } from 'react'
import { Wallet } from 'lucide-react'

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState('')

  const handleConnect = async () => {
    // Simulate wallet connection
    setIsConnected(true)
    setAddress('0x1234...5678')
  }

  const handleDisconnect = () => {
    setIsConnected(false)
    setAddress('')
  }

  if (isConnected) {
    return (
      <button
        onClick={handleDisconnect}
        className="px-4 py-2 bg-surface text-fg rounded-lg font-medium hover:bg-surface/80 transition-colors duration-200 border border-white/10 flex items-center gap-2"
      >
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
        {address}
      </button>
    )
  }

  return (
    <button
      onClick={handleConnect}
      className="px-4 py-2 bg-primary text-white rounded-lg font-medium hover:bg-accent transition-colors duration-200 flex items-center gap-2"
    >
      <Wallet className="w-4 h-4" />
      Connect Wallet
    </button>
  )
}
