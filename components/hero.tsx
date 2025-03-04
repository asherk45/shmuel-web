import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-10">
          <div className="space-y-4 max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Manage Your <span className="text-indigo-600">Business Finances</span> <br />
              Easily & Efficiently
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Optimize cash flow, get real-time financial reports, and make smarter decisions with our financial
              solution.
            </p>
          </div>

          <div className="relative w-full max-w-5xl">
            {/* Dashboard mockup */}
            <div className="relative z-10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-UzTWGirj1pLg17oocbhkndo87N2hOf.png"
                width={1000}
                height={600}
                alt="Finance dashboard"
                className="w-full h-auto rounded-lg shadow-xl"
                priority
              />
            </div>

            {/* Purple gradient background */}
            <div className="absolute -bottom-10 -left-10 -right-10 -top-10 bg-gradient-to-r from-indigo-50 via-indigo-100 to-indigo-50 rounded-3xl -z-10"></div>

            {/* CTA button on the dashboard */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full" asChild>
                <Link href="#cta">Free 14 days trial</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

