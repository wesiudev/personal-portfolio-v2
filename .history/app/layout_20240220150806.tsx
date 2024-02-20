import "../styles/globals.css";
import localFont from "next/font/local";
import { Lato } from "next/font/google";
import { Metadata } from "next";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { NavLeft, NavRight } from "../components/Navigation";
import { usePathname } from "next/navigation";
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
  const pathname = usePathname();
  return (
    <html className="scrollbarBlack">
      <body
        className={`${cocosharp.variable} ${lato.variable} ${anta.variable} ${dosis.variable} font-sans scrollbarBlack overflow-x-hidden`}
      >
        <NavLeft />
        <NavRight pathname={pathname} />
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
const anta = localFont({
  src: [
    {
      path: "../fonts/Anta.ttf",
      weight: "400",
    },
  ],
  variable: "--font-anta",
});
const dosis = localFont({
  src: [
    {
      path: "../fonts/Dosis.ttf",
      weight: "400",
    },
  ],
  variable: "--font-dosis",
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
