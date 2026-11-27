import "./globals.css";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "GXEON | Command Center",
  description: "XPeX Systems AI — Agent Operations Command Center",
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}