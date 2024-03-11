import { HttpResponse, http } from 'msw'
import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyhRevenueMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 222,
    },
    {
      date: '01/01/2024',
      receipt: 444,
    },
    {
      date: '01/01/2024',
      receipt: 333,
    },
  ])
})
