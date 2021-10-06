import { useState, useCallback, useEffect } from 'react'

export default function useMediaQuery(width) {
    const [targetReached, setTargetReached] = useState(false)

    const updateTarget = useCallback((e) => {
        if (e.matches) {
            setTargetReached(true)
        } else {
            setTargetReached(false)
        }
    }, [])

    useEffect(() => {
        const media = window.matchMedia(`(max-width: ${width}px)`)
        // Спасибо apple за этот полифилл, на движках JS айфонов addEventListener не работает
        // и приходится использовать deprecated метод
        try {
            media.addEventListener('change', (e) => updateTarget(e))
        } catch (er) {
            media.addListener((e) => updateTarget(e))
        }

        // Check on mount (callback is not called until a change occurs)
        if (media.matches) {
            setTargetReached(true)
        }

        return () => {
            try {
                media.removeEventListener('change', (e) => updateTarget(e))
            } catch (er) {
                media.removeListener((e) => updateTarget(e))
            }
        }
    }, [updateTarget, width])

    return targetReached
}
