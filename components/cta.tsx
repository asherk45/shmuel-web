import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Cta() {
  return (
    <section id="cta" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Ready to streamline your workflow?
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of teams already using StreamLine to automate their workflows and boost productivity.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Enter your email" className="max-w-lg flex-1" />
              <Button type="submit">Get Started</Button>
            </form>
            <p className="text-xs text-muted-foreground">
              Start your 14-day free trial. No credit card required.{" "}
              <Link href="#" className="underline underline-offset-2">
                Terms & Conditions
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

