"use client"

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })



const user = {
  name: "John Doe",
  avatar: null, // Set to null to test default avatar
  isLoggedIn: false // Set to false to test logged out state
}
type User = {
  name: string;
  avatar: string | null;
  isLoggedIn: boolean;
};

// Use this type for the component props
type UserProfileProps = {
  user: User;
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isSidebarOpen, setSidebarOpen] = useState(false)

  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <div className="flex flex-col h-screen">
          {/* Mobile Header */}
          <header className="md:hidden bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
              <img src="/images/header.png" alt="SOP Wiki Logo" className="h-8" />
              <button
                onClick={() => setSidebarOpen(!isSidebarOpen)}
                className="p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open sidebar</span>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </header>

          {/* Main content area */}
          <div className="flex-grow flex overflow-hidden">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'block' : 'hidden'} md:block bg-white w-64 flex-shrink-0 border-r border-gray-200 overflow-y-auto flex flex-col`}>
              {/* Desktop Logo */}
              <div className="hidden md:flex justify-center p-4 border-b border-gray-200">
                <img src="/images/header.png" alt="SOP Wiki Logo" className="w-100 h-50" />
              </div>
              <nav className="p-4 flex-grow">
                <SearchBar />
                <NavItems />
              </nav>
              <UserProfile user={user} />
            </aside>

            {/* Main content */}
            <main className="flex-1 overflow-y-auto p-4">
              <div className="max-w-7xl mx-auto">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

function SearchBar() {
  return (
    <div className="mb-6">
      <form>
        <label htmlFor="search" className="sr-only">Search SOPs</label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input
            id="search"
            name="search"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Search SOPs"
            type="search"
          />
        </div>
      </form>
    </div>
  )
}

function NavItems() {
  return (
    <ul className="space-y-2">
      <li>
        <Link href="/sops" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
          All SOPs
        </Link>
      </li>
      <li>
        <Link href="/categories" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
          Categories
        </Link>
      </li>
      <li>
        <Link href="/recent-changes" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
          Recent Changes
        </Link>
      </li>
      <li>
        <Link href="/favorites" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
          Favorites
        </Link>
      </li>
      <li>
        <Link href="/create-sop" className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center px-2 py-2 text-base font-medium rounded-md">
          Create New SOP
        </Link>
      </li>
    </ul>
  )
}
function UserProfile({ user }: UserProfileProps) {
  if (!user.isLoggedIn) {
    return (
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500">Not logged in</span>
          <Link href="/login" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            Log in
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="border-t border-gray-200 p-4">
      <div className="flex items-center">
        {user.avatar ? (
          <img src={user.avatar} alt={user.name} className="h-10 w-10 rounded-full" />
        ) : (
          <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-xl font-medium text-gray-600">
              {user.name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-700">{user.name}</p>
          <button
            onClick={() => {/* Add logout logic here */}}
            className="text-xs font-medium text-gray-500 hover:text-gray-700"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}