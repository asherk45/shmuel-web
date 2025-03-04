import { BarChart3, CreditCard, LineChart, PieChart, Wallet } from "lucide-react"

export function PowerfulFeatures() {
  return (
    <section className="w-full py-12 md:py-24 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">Powerful features</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Everything you need to manage finances</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
              Our comprehensive suite of tools helps you track, analyze, and optimize your business finances with ease.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <BarChart3 className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Financial Reporting</h3>
                <p className="text-muted-foreground">
                  Generate detailed financial reports with just a few clicks to track your business performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <Wallet className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Cash Flow Management</h3>
                <p className="text-muted-foreground">
                  Monitor and optimize your cash flow to ensure your business maintains healthy finances.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <LineChart className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Expense Tracking</h3>
                <p className="text-muted-foreground">
                  Track all your business expenses in one place and categorize them for better financial management.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <CreditCard className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Invoice Management</h3>
                <p className="text-muted-foreground">
                  Create, send, and track invoices to streamline your billing process and get paid faster.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-4 p-6 bg-white rounded-xl shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <PieChart className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Budget Planning</h3>
                <p className="text-muted-foreground">
                  Create and manage budgets to keep your business spending on track and achieve financial goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

