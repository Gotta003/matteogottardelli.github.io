import { createContext, useContext } from "react";

export const PopoverCtx=createContext(null)

export function usePopover() {
    const ctx=useContext(PopoverCtx)
    if(!ctx) throw new Error("usePopover must be used within PopoverProvider")
    return ctx
}