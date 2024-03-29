import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './month-revenue-card'
import { MonthOrdersAmountsCard } from './month-orders-amounts-card'
import { DayOrdersAmountsCard } from './day-order-amount-card'
import { MonthCanceledOrdersAmountsCard } from './month-canceled-amount-card'
import { RevenueChart } from './revenue-chart'
import { PopularProductsChart } from './popular-products.chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3x1 font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountsCard />
          <DayOrdersAmountsCard />
          <MonthCanceledOrdersAmountsCard />
        </div>
        <div className="grid-col-9 grid gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
