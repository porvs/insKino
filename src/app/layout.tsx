import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header"; 


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ins Kino - 단편 영화 플랫폼",
  description: "숨은 단편 영화를 찾아드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header /> 
          {children} 
        </ThemeProvider>
      </body>
    </html>
  );
}