import ContextProps from "@/interfaces/context.interface";
import { createContext, useState } from "react";
import { initialState } from ".";

export const GlobalContext = createContext<ContextProps>(initialState);

export const GlobalProvider = ({ children }: any) => {
    const [incorrect, setIncorrect] = useState<boolean>(false);

    return (
        <GlobalContext.Provider value={{ incorrect, setIncorrect }}>
            {children}
        </GlobalContext.Provider>
    )
}