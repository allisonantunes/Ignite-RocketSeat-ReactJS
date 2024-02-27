import { api } from '@/lib/axios'

export interface SetOrderDetailsParams {
  orderId: string
}

export interface GetOrderDetailsParams {
  id: string
  createAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: SetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsParams>(`/orders/${orderId}`)

  return response.data
}
