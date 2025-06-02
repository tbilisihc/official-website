import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
        
          <nav className="flex justify-center items-center">
            
            <ul className="flex space-x-10 ">
              <li>
                <Link href="/" className="text-white-700 hover:text-gray-700">
                  <Image src ="/assets/home.png" alt= "Home" width={24} height={24} className="inline-block mr-1"/>
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white-700 hover:text-gray-700">
                  <Image src ="/assets/news.png" alt= "News" width={24} height={24} className="inline-block mr-1"/>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black-700 hover:text-gray-700">
                  <Image src ="/assets/about.png" alt= "About" width={24} height={24} className="inline-block mr-1"/>
                </Link>
              </li>
            </ul>          
            </nav>  
            
        </header>
        {children}
    <div>
        
    </div>
        <footer className="mt-8 text-center text-gray-500">
          <p className="mt-4 text-lg">
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
