import { ReactNode, useCallback, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface transaction {
    id: number;
    description: string;
    type:  'income' | 'outcome';
    price: number;
    category: string;
    createAt: string;
}

interface CreateTransactionInput {
    description: string
    price: number
    category: string
    type: 'income' | 'outcome'
}

interface TransactionsContextType {
    transactions: transaction[]
    fetchTransactions: (query?: string) => Promise<void>
    createTransaction: (data: CreateTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
    children: ReactNode
}


export const TransactionsContext = createContext({} as TransactionsContextType)

export function TransactionsProvider({children} : TransactionsProviderProps) {
    const [ transactions, setTransactions] = useState<transaction[]>([])

    const fetchTransactions = useCallback( async ( query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })
        setTransactions(response.data)
    }, []) 

    const createTransaction = useCallback(async (data: CreateTransactionInput) => {
        const { category, description, price, type} = data
        
        const response = await api.post('transactions', {
            description,
            price,
            category,
            type,
            createAt: new Date(),
        })
        setTransactions(state => [response.data, ...state ])
    }, [])

    useEffect(() => {
        fetchTransactions()
    }, [])

    
    return (
        <TransactionsContext.Provider value={{ 
            transactions, 
            fetchTransactions, 
            createTransaction,
            }}>
            {children}
        </TransactionsContext.Provider>
    )
}