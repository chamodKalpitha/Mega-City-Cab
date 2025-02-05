import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mega City Cab",
  description:
    "Request and pay for taxis with Curb. Low-cost, on-demand rides. Available in major cities across the Sri Lanka.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
