/**
 * v0 by Vercel.
 * @see https://v0.dev/t/PmwTvNfrVgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";


export default function LandingPage() {
  const user = currentUser();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 w-full h-14 flex items-center justify-between fixed shadow-sm bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
        <Link className="flex items-center justify-center gap-2" href="/">
          <MountainIcon className="h-6 w-6" />
          <span className="text-black dark:text-white">Gaurav Sahu</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>

          {!user ? (
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/sign-in"
            >
              Sign In
            </Link>
          ) : (
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/dashboard"
            >
              Dashboard
            </Link>
          )}
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-6 sm:py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="bg-neutral-100 dark:bg-neutral-800 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
              <Image alt="gauravsahu" src="https://images.unsplash.com/photo-1571908598047-9b0049221e4e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={800} height={100}/>
            </div>
              
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Create and <br />
                    customize your Linktree in minutes
                  </h1>
                  <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                    Share your Linktree from your Instagram, TikTok, Twitter and
                    other bios
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-8 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                    href="/sign-in"
                  >
                    Get Started
                  </Link>
                
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-neutral-100 px-3 py-1 text-sm dark:bg-neutral-800">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Analyze your audience and keep your followers engaged
                </h2>
                <p className="max-w-[900px] text-neutral-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-neutral-400">
                Track your engagement over time, monitor revenue and learn what’s converting your audience. Make informed updates on the fly to keep them coming back.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-10">
            <div className="bg-neutral-100 dark:bg-neutral-800 mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square">
              <Image alt="gauravsahu" src="https://images.unsplash.com/photo-1595231712404-aa6a3366b418?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width={800} height={100}/>
            </div>
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Collaboration</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                      Seamlessly connect your Linktree with the tools you already use.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Customization</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                      Customize your Linktree to match your brand. Make it feel like you.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Content</h3>
                      <p className="text-neutral-500 dark:text-neutral-400">
                      Manage, update and schedule content with our quick, easy editor.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                  Sign Up for Updates
                </h2>
                <p className="max-w-[600px] text-neutral-500 md:text-xl dark:text-neutral-400">
                  Stay updated with the latest product news and updates.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex sm:flex-row flex-col space-y-2 sm:space-y-0 sm:space-x-2">
                  <input
                    className="max-w-lg flex-1 px-4 py-2 border-border border rounded-md "
                    placeholder="Enter your email"
                    type="email"
                  />
                  <Link
                   href="/sign-in"
                    type="submit"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-sm font-medium text-neutral-50 shadow transition-colors hover:bg-neutral-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 dark:focus-visible:ring-neutral-300"
                  >
                    Sign Up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}


function MountainIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}
