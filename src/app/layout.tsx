import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "WeMakeDevs",
    description:
        "WeMakeDevs is a global tech community empowering hunderds of developers around the globe.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='en'>
            <body className={spaceGrotesk.className}>
                {children}
                <Analytics />
            </body>
        </html>
    );
}
