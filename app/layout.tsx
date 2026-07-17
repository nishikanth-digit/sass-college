import { Roboto, Yantramanav } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-body",
  display: "swap",        // Recommended
});

const yantramanav = Yantramanav({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-heading",
  display: "swap",        // Recommended
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${yantramanav.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}