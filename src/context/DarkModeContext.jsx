import React, { createContext, useContext, useState, useEffect } from 'react'

const DarkModeContext = createContext()

export const useDarkMode = () => {
  const context = useContext(DarkModeContext)
  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }
  return context
}

export const DarkModeProvider = ({ children }) => {
  // Force dark mode - always enabled for the Hacker theme
  const isDarkMode = true;

  useEffect(() => {
    // Enforce dark mode class on document
    document.documentElement.classList.add('dark')
  }, [])

  // Dummy toggle to prevent errors from other components
  const toggleDarkMode = () => { }

  const value = {
    isDarkMode,
    toggleDarkMode
  }

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}
