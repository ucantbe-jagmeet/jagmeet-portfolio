import Navbar from "../components/Navbar";
import "./globals.css";
import { Montserrat } from "next/font/google";
import { Footer } from "../components";
import { Script } from "next/script";
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

export const metadata = {
  title: "Jagmeet PortFolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
          } else {
            document.documentElement.classList.remove('dark')
          }
        `}
        </Script>

        <main
          className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen `}
        >
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
