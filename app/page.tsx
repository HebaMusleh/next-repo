import AcmeLogo from "./ui/acme-logo";
import Image from "next/image";
import { lusitana } from "./ui/fonts/fonts";
import Link from "next/link";

export default function Page() {
  return (
    <main className="min-h-screen p-6 ">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-6 flex flex-col items-center justify-between md:flex-row">
        <div className="p-0 md:p-8">
          <h1
            className={`${lusitana.className} mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl`}
          >
            Welcome to Acme
          </h1>
          <p className="mt-2 text-lg font-normal text-gray-700 md:text-xl">
            This is Example for Learning Next.js 13.4 and Tailwind CSS 3.3
          </p>
          <div className="mt-4 ">
            <Link
              href={"/"}
              className="p-2 bg-blue-500 w-28 mt-5 text-white rounded-md hover:bg-blue-600 transition-colors duration-200"
            >
              Login
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden lg:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block lg:hidden"
            alt="Screenshots of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
