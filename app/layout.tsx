import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Image from 'next/image';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pokémon Search - FM Tech',
  description: 'Search and explore Pokémon information',
  icons: {
    icon: [
      {
        url: "/pokemon.png", type: "image/png",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900">
        <div className="min-h-screen ">
          <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 py-6 flex justify-center items-center gap-3">
              <Image
                src="/pokemon.png"
                alt="Pokeball"
                width={32}
                height={32}
                priority
              />
              <h1 className="text-3xl font-bold text-gray-900">
                Pokémon Search
              </h1>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 py-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}