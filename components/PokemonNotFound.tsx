import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
export default function PokemonNotFound({ searchQuery }: { searchQuery: string }) {
    const router = useRouter();
  return (
    <div className="max-w-2xl mx-auto text-center py-16">
      <div className="text-6xl mb-4">🔍</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Pokémon Not Found</h2>
      <p className="text-gray-600">
        No Pokémon found with the name <span className="font-semibold">{searchQuery}</span>.
      </p>
      <p className="text-gray-500 text-sm mt-2">
        Please try searching for another Pokémon.
      </p>
      <div className="m-1 justify-center flex">
           <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 m-4 px-4 py-2 text-black hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>back</span>
            </button>
      </div>
    </div>
  );
}