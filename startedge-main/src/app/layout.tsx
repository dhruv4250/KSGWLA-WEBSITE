import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Startedge Global Pvt. Ltd. | Strategy & Leadership Consulting",
  description: "Premier strategic business consulting and leadership development firm dedicated to driving breakthrough growth, innovation, and organizational excellence.",
  keywords: ["Consulting", "Strategy", "Leadership", "Startedge Global", "Business Excellence"],
  openGraph: {
    title: "Startedge Global Pvt. Ltd.",
    description: "Premier strategic business consulting and leadership development.",
    siteName: "Startedge Global",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Startedge Global Pvt. Ltd.",
    description: "Premier strategic business consulting and leadership development.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased text-navy bg-white`}>
        {children}
      </body>
    </html>
  );
}
