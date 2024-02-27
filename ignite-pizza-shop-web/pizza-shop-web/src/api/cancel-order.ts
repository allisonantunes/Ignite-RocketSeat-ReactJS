import { api } from '@/lib/axios'

export interface CacelOrderParams {
  orderId: string
}

export async function cancelOrder({ orderId }: CacelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
