import { Geist, Geist_Mono,Farro, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Fund_Dubem",
  description: "Big dreams need a little help 💜. Every bit of support counts 🙌",
  icons: {
    icon: '/favicon.ico',
  },
};
const farro = Farro({
  variable: "--font-farro",
  subsets: ["latin"],
  weight: ["400", "700"], 
});
const wixMadefor = Wix_Madefor_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-wix-madefor', 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  ${farro.variable} ${wixMadefor.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
