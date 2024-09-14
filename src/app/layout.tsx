import "./globals.css";
import type { Metadata } from "next";
import { ApolloProvider } from "@/shared/providers";
import { Inter } from "next/font/google";
import { Header } from "@/widgets/header";

const inter = Inter({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "HarmonyHR",
  description: "Тестовое задание на frontend стажера в Развитие IT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ApolloProvider>
          <main className="flex flex-col min-h-screen">
            <Header />
            {children}
          </main>
        </ApolloProvider>
      </body>
    </html>
  );
}
