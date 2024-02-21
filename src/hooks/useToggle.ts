import { useState } from "react";

export const useToggle = (initialState: boolean = false) => {
    const [ isActive, setIsActive ] = useState<boolean>(initialState);
    const handleToggle = (newValue: boolean) => {
        setIsActive(newValue);
    }

    return [
        isActive,
        handleToggle
    ] as const
    
}

