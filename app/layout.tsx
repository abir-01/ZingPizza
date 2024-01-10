import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import favicon from "../public/favicon.png"
import { Providers } from "@/components/Providers";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Providers1 } from './GlobalRedux/provider';
import { PersistGate } from 'redux-persist/integration/react';
import { options } from "./api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import SessionProvider from "@/utils/SessionProvider";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Domino\'s Pizza',

  description: 'Generated by create next app',
}

export default async function RootLayout(
  {
    children,
  }: {
    children: React.ReactNode
  }) {

  const session = await getServerSession(options)

  return (

    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <Providers>
          <Providers1>
            <SessionProvider session={session}>
              <Navbar session={session}/>
              {children}
              <Footer />
            </SessionProvider>
          </Providers1>
        </Providers>
      </body>
    </html>
  )
}
