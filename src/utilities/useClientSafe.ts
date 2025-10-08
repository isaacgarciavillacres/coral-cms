import { useEffect, useState } from 'react'

/**
 * Hook that safely handles client-side state to prevent hydration mismatches
 * Returns true only after the component has mounted on the client
 */
export function useIsClient(): boolean {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient
}

/**
 * Hook that safely accesses localStorage to prevent hydration mismatches
 */
export function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
  const isClient = useIsClient()

  const [storedValue, setStoredValue] = useState<T>(() => {
    if (!isClient) {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.warn(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T) => {
    try {
      setStoredValue(value)
      if (isClient) {
        window.localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (error) {
      console.warn(`Error setting localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue]
}
