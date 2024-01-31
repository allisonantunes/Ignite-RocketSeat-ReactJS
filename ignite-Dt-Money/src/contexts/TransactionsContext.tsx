import { ReactNode, createContext, useEffect, useState } from "react";

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
}

interface TransactionsProviderProps {
    children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [ transactions, setTransactions] = useState<transaction[]>([])

    async function loadTransaction() {
        const response = await fetch('http://localhost:3000/transactions')
        const data = await response.json()
        setTransactions(data)
    }

    useEffect(() => {
        loadTransaction()
    }, [])

    
    return (
        <TransactionsContext.Provider value={{ transactions }}>
            {children}
        </TransactionsContext.Provider>
    )
}