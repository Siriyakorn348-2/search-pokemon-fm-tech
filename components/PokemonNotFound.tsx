import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function PokemonNotFound({ searchQuery }: { searchQuery: string }) {
  const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="text-6xl mb-4 flex justify-center">
        <Image
          src="/notFoundImg.png"
          alt="Pokeball"
          width={300}
          height={300}
          className="w-[180px] h-auto sm:w-[220px] md:w-[300px] lg:w-[300px] "
        />
      </div>
      <p className="text-gray-600">
        No Pokémon found with the name <span className="font-semibold">{searchQuery}</span>.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Please try searching for another Pokémon.
      </p>
      <div className="m-1 justify-center flex">
        <button
          onClick={() => router.push('/')}
          className="flex items-center gap-2 m-4 px-4 py-2 text-black hover:text-gray-900 bg-white hover:bg-gray-200 rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>back</span>
        </button>
      </div>
    </div>
  );
}