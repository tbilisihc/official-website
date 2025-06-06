import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";
import Image from "next/image";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tbilisi Hack Club",
  description: "Non-profit organization for students in Tbilisi, Georgia",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <header>
        <nav className="bg-gray-900 shadow-md p-4">
          <div className="relative container mx-auto flex items-center">
            <Link href="/" className="flex items-center text-white text-2xl font-bold z-10">
              <Image
                src="/logo.png"
                alt="Tbilisi Hack Club Logo"
                width={40}
                height={40}
                className="inline-block mr-2"
              />
            </Link>
            <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center space-x-8">
              <Link href="/" className="flex items-center text-gray-200 hover:text-blue-300 transition-colors">
                <IoHomeOutline className="text-lg sm:text-xl md:text-2xl mr-1" />
                <span className="text-sm sm:text-base md:text-lg font-medium">Home</span>
              </Link>
              <Link href="/news" className="flex items-center text-gray-200 hover:text-blue-300 transition-colors">
                <IoNewspaperOutline className="text-lg sm:text-xl md:text-2xl mr-1" />
                <span className="text-sm sm:text-base md:text-lg font-medium">News</span>
              </Link>
              <Link href="/about" className="flex items-center text-gray-200 hover:text-blue-300 transition-colors">
                <FaRegQuestionCircle className="text-lg sm:text-xl md:text-2xl mr-1" />
                <span className="text-sm sm:text-base md:text-lg font-medium">About</span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {children}
      <div></div>
      <footer className="text-center text-gray-500">
        <p className="text-lg">
          Want to improve this site? Go to our{" "}
          <a className="underline" href="https://github.com/orgs/tbilisihc">
            github
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Tbilisi Hack Club</p>
      </footer>
    </body>
    </html>
  );
}
