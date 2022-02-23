import { useEffect, useState } from 'react'

export const My = () => {
    const [loaded, setLoaded] = useState(false)
    const [itemValue, setItemValue] = useState<string | undefined | null>()
    useEffect(() => {
        const v = window.localStorage.getItem('k') ?? '0'
        window.localStorage.setItem('k', `${Number(v) + 1}`)
        setItemValue(v)
        setLoaded(true)
    }, [])
    return <div>{loaded ? `loaded: ${itemValue}` : undefined}</div>
}
