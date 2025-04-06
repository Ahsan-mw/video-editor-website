import { Link } from "react-router-dom";
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card';
import { Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-4xl font-semibold lg:text-5xl">Pricing that Scales with You</h1>
          <p className="text-gray-500">Gemini is evolving to be more than just the models. It supports an entire suite of APIs and platforms helping developers and businesses innovate.</p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* Free Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Free</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm">
                {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link to="#">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="relative flex flex-col">
            {/* Removed problematic class here */}
            <div className="absolute inset-x-0 -top-3 flex justify-center">
              <span className="bg-gradient-to-r from-purple-400 to-amber-300 text-xs font-medium px-3 py-1 rounded-full text-amber-950 shadow">
                Popular
              </span>
            </div>

            <CardHeader>
              <CardTitle className="font-medium">Pro</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$19 / mo</span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm">
                {[
                  'Everything in Free Plan',
                  '5GB Cloud Storage',
                  'Email and Chat Support',
                  'Access to Community Forum',
                  'Single User Access',
                  'Access to Basic Templates',
                  'Mobile App Access',
                  '1 Custom Report Per Month',
                  'Monthly Product Updates',
                  'Standard Security Features',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link to="#">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Startup Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">Startup</CardTitle>
              <span className="my-3 block text-2xl font-semibold">$29 / mo</span>
              <CardDescription className="text-sm">Per editor</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <hr className="border-dashed" />
              <ul className="space-y-3 text-sm">
                {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button asChild variant="outline" className="w-full">
                <Link to="#">Get Started</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
