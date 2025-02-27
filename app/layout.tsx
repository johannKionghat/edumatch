import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EduMatch - Connectez-vous avec des professionnels',
  description: 'EduMatch est une plateforme innovante qui connecte les étudiants avec des professionnels pour un accompagnement personnalisé.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
