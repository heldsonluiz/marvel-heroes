import { useEffect, useState } from "react";

export const useDebounce = (value:string, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState<string>(value)

  useEffect(() => {
    const id = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(id)
    }
  }, [value, delay])

  return debouncedValue
}
