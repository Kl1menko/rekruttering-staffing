import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SITE_NAME, buildSeo } from "@/lib/seo";
import "./globals.css";

const sans = Public_Sans({
  variable: "--font-google-sans",
  subsets: ["latin"],
});

const groteskSans = localFont({
  variable: "--font-ui-sans",
  src: [
    {
      path: "../fonts/die-grotesk-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/die-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/die-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

const display = localFont({
  variable: "--font-ui-display",
  src: [
    {
      path: "../fonts/die-grotesk-medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/die-grotesk-bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/die-grotesk-display-bold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  ...buildSeo({
    title: "B2B staffing and compliance partner",
    description:
      "Prime Work helps employers hire faster with clear processes, compliance control and predictable delivery.",
    path: "/",
  }),
  applicationName: SITE_NAME,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${groteskSans.variable} ${display.variable}`}
    >
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
