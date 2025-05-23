import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Yashini Hettiarachchi | IT Professional",
  description: "Portfolio website of Yashini Hettiarachchi - IT Professional specializing in Quality Assurance, Web Development, and Project Management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
