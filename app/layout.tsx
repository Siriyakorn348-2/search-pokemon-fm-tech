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
          <header>
            <div className="text-center py-6 sm:py-10">

              <div className="mb-3 flex justify-center items-center">
                <Image
                  src="/pokemon2.png"
                  alt="Pokeball"
                  width={180}         
                  height={180}
                  className="w-[180px] h-auto sm:w-[220px] md:w-[280px] lg:w-[300px]"
                  priority
                />
              </div>

              <h2
                className="text-lg sm:text-xl md:text-2xl font-bold text-gray-500 mb-2"
              >
                Welcome to Pokémon Search
              </h2>

              <p
                className=" text-sm sm:text-base md:text-lg text-gray-600 max-w-xl mx-auto"
              >
                Search for any Pokémon to see their stats, attacks, and evolutions!
              </p>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-4 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}