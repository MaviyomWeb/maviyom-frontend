import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Maviyom Aviation - Where technology takes wings",
  description: "Maviyom Aviation -  Where technology takes wings",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          href="/meta-logo.png"
          type="image/png"
          sizes="180x180"
        />
      </head>
      <body className={`${inter.className} bg-white`}>
        {/* <Navbar /> */}
        <Header />
        <main>
          <article>
            {children}
            <CTA />
          </article>
        </main>
        <Footer />
      </body>
    </html>
  );
}
