'use client'

import { createContext } from'react';
import { User } from '../data-samples/user-data';


export const UserContext = createContext<User | undefined>(undefined);

export function useUserContext(context:User | undefined) {
    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserContextProvider');
    }
    return context;
}