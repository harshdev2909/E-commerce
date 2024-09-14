import { createContext, useState } from "react";
import ProductAPI from "./api/ProductAPI";

export const GlobalState = createContext()

export const DataProvider =({children})=>{
    const[token,setToken]= useState(false)

    const state={
        token:[token,setToken],
        productAPI:ProductAPI()
    }
    ProductAPI()
    return (
        <GlobalState.Provider value={state}>
            {children}
        </GlobalState.Provider>
    )
}