import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function Testimonials() {
  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Loved by businesses worldwide</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Don't just take our word for it. Here's what our customers have to say about StreamLine.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="text-lg">
                  "StreamLine has transformed how our team works. We've reduced manual tasks by 70% and can focus on
                  what really matters."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">Sarah Johnson</p>
                    <p className="text-sm text-muted-foreground">CTO, TechCorp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="text-lg">
                  "The analytics dashboard alone has helped us identify bottlenecks we didn't even know existed. Game
                  changer!"
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">Michael Chen</p>
                    <p className="text-sm text-muted-foreground">Operations Director, GrowFast</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col gap-4">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="text-lg">
                  "Implementation was seamless, and the ROI was immediate. Our team adopted it quickly and loves using
                  it daily."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-medium">Jessica Martinez</p>
                    <p className="text-sm text-muted-foreground">Product Manager, InnovateCo</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

