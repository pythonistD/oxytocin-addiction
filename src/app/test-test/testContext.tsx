'use client'

import { createContext } from'react';
import {Option, Question, UnParsedQuestion} from '../data-samples/test-data'
import { Dispatch, SetStateAction, useContext, Context } from'react';

interface OptionState {
    option: Option,
    state: [string, Dispatch<SetStateAction<string | null>>]
}

export const TestContext = createContext<[boolean, Dispatch<SetStateAction<boolean>>][] | undefined>(undefined);

export function useTestContext(context:[boolean, Dispatch<SetStateAction<boolean>>][] | undefined) {
    if (context === undefined) {
        throw new Error('useTestContext must be used within a TestContextProvider');
    }
    return context;
}