import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DateSplit",
  description: "Plan your perfect date",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7644729638272332"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>
        {children}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7644729638272332"
          crossOrigin="anonymous"
        ></script>
        <ins
          style={{ display: "block" }}
          data-ad-client="ca-pub-7644729638272332"
          data-ad-slot="5413643973"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </body>
    </html>
  );
}
