import { Clock, Brain, Headphones } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="w-full py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-indigo-600">Why choose us</p>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Why you should choose us</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Clock className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Save Time & Costs</h3>
                <p className="text-muted-foreground">
                  Automate repetitive financial tasks and reduce operational costs with our efficient platform.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Brain className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Make Smarter Decisions</h3>
                <p className="text-muted-foreground">
                  Gain insights into your business finances and make data-driven decisions to improve performance.
                </p>
              </div>
            </div>

            <div className="flex flex-col items-start space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Headphones className="h-6 w-6 text-indigo-600" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">24/7 Customer Support</h3>
                <p className="text-muted-foreground">
                  Access dedicated support anytime you need help with our responsive customer service team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

