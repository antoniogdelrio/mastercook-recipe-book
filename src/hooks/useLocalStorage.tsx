import { useState } from 'react'

export default function useLocalStorage (key: string, initialValue?: string) {
    const [value, setValue] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedValue = localStorage.getItem(key)
            if (storedValue) {
                return storedValue
            }
        }
        return initialValue
    })

    const editValue = (newValue: string) => {
        setValue(newValue)
        localStorage.setItem(key, newValue)
    }

    return [
        value,
        editValue
    ] as const
}