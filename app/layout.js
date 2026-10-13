import { Geist, Geist_Mono } from "next/font/google";
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
  title: "GiftCardMall/MyGift | Official Website | Balance & Activation",
  description:
    "Searching for giftcardmall/mygift or www.giftcardmall.com/mygift? Learn how to find your card's real balance-check service, read available funds, understand transactions, and solve prepaid gift card issues.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
