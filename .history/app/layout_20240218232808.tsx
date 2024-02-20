import "../styles/globals.css";
import localFont from "next/font/local";
import { Lato, Anta } from "next/font/google";
import { Metadata } from "next";

import "react-responsive-carousel/lib/styles/carousel.min.css";
export const metadata: Metadata = {
  title: "Wesiudev Personal Portfolio",
  icons: [
    {
      url: "/favicon.ico",
      sizes: "32x32",
      type: "image/x-icon",
    },
  ],
};
export default async function Root({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scrollbarBlack">
      <body
        className={`${cocosharp.variable} ${lato.variable} font-sans scrollbarBlack overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

const lato = Lato({
  weight: "400",
  variable: "--font-lato",
  subsets: ["latin"],
});
const cocosharp = localFont({
  src: [
    {
      path: "../fonts/Bold.ttf",
      weight: "700",
    },

    {
      path: "../fonts/Light.ttf",
      weight: "300",
    },
    {
      path: "../fonts/Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-cocosharp",
});
