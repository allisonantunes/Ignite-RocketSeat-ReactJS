import { ReactNode, createContext, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface transaction {
    id: number;
    description: string;
    type:  'income' | 'outcome';
    price: number;
    category: string;
    createAt: string;
}

interface TransactionsContextType {
    transactions: transaction[]
    fetchTransactions: (query?: string) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [ transactions, setTransactions] = useState<transaction[]>([])

    async function fetchTransactions( query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })
        setTransactions(response.data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    
    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, }}>
            {children}
        </TransactionsContext.Provider>
    )
}