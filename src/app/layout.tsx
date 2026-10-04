import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from './lyout/header';
import Footer from './lyout/footer';
//import Modal from './element/modal.tsx';
import "./globals.css";
import "./layout.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" >
      <body className={'overflow-hidden'}>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
