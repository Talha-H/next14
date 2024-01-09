import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../Components/Nav";
import Providers from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Next JS 14",
  description: "Let's learn NextJs 14",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        <main className="px-8 py-20 max-w-6xl mx-auto">
          <Providers>{children}</Providers>
        </main>
      </body>
    </html>
  );
}
