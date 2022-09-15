import { useEffect, useMemo, useState } from "react";


/**
 * A hook that will save and local localStorage with a bound state.
 * @param {string} key The key used to associate the state to your localStorage.
 * @param {any} initialValue The initial value of the state.
 * @returns A react hook that will save and load localStorage state.
 */
export default function(key, initialValue = null) {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue)

    useEffect(() => {
        const localValue = JSON.parse(localStorage.getItem(key))
        if (localValue) {
            setValue(localValue)
        }
    }, [setValue])

    useMemo(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}