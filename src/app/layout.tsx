import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { IoHomeOutline, IoNewspaperOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";



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
    <>
    
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <nav className="flex justify-center items-center ">
            
            <ul className="flex space-x-10 ">
              <li>
                <Link href="/" className="text-white-700 hover:text-gray-500">
                  <IoHomeOutline className="inline-block mr-2 text-3xl" />
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-white-700 hover:text-gray-500">
                  <IoNewspaperOutline className="inline-block mr-2 text-3xl" />
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black-700 hover:text-gray-500">
                  <FaRegQuestionCircle className="inline-block mr-2 text-3xl" />
                </Link>
              </li>
            </ul>          
            </nav>  
            
        </header>
        {children}
    <div>
        
    </div>
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
    </>
  );
}
