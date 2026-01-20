import type { Metadata } from "next";
import { nunito } from "@/app/lib/fonts";
import "./ui/globals.css";

export const metadata: Metadata = {
  title: "Student Management App",
  description: "Student Management Application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={nunito.className}>
      <body
        className={`${nunito.className} antialiased bg-white text-black min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
