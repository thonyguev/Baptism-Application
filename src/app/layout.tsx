import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { NavView } from "@/components/navigation-view/nav-view";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BaptismHub",
  description: "Baptismal records",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavView>{children}</NavView>
        </ThemeProvider>
      </body>
    </html>
  );
}
