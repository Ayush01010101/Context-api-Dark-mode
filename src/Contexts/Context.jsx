import React from 'react';
import { createContext,useContext } from 'react';

export const Themecontext=createContext(null);

export const Themeprovider=Themecontext.Provider;

export function Themehook(){
    return useContext(Themecontext)
}


