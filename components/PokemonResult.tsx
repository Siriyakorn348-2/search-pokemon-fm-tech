'use client';

import { memo } from 'react';
import { useRouter } from 'next/navigation';
import type { Pokemon } from '@/lib/types';
import { ArrowLeft } from 'lucide-react';

interface PokemonResultProps {
    pokemon: Pokemon;
}

const PokemonResult = memo(({ pokemon }: PokemonResultProps) => {
    const router = useRouter();

    const handleEvolutionClick = (evolutionName: string) => {
        router.push(`/?q=${encodeURIComponent(evolutionName.toLowerCase())}`);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <button
                onClick={() => router.push('/')}
                className="flex items-center gap-2 m-4 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            >
                <ArrowLeft className="w-5 h-5" />
                <span>back</span>
            </button>
            <div className="md:flex">

                <div className="md:flex-shrink-0 bg-gradient-to-br from-blue-50 to-indigo-50 p-8 flex items-center justify-center">

                    <img
                        className="w-48 h-48 object-contain"
                        src={pokemon.image}
                        alt={pokemon.name}
                        loading="lazy"
                    />
                </div>

                <div className="p-8 flex-1">
                    <div className="mb-4">
                        <div className="text-sm text-gray-500 font-medium">#{pokemon.number}</div>
                        <h2 className="text-3xl font-bold text-gray-900 capitalize">{pokemon.name}</h2>
                        <p className="text-gray-600 mt-1">{pokemon.classification}</p>
                    </div>

                    <div className="flex gap-2 mb-6">
                        {pokemon.types.map((type) => (
                            <span
                                key={type}
                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                            >
                                {type}
                            </span>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                        <div>
                            <span className="text-gray-500">Max CP:</span>
                            <span className="ml-2 font-semibold">{pokemon.maxCP}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Max HP:</span>
                            <span className="ml-2 font-semibold">{pokemon.maxHP}</span>
                        </div>
                        <div>
                            <span className="text-gray-500">Height:</span>
                            <span className="ml-2 font-semibold">
                                {pokemon.height.minimum} - {pokemon.height.maximum}
                            </span>
                        </div>
                        <div>
                            <span className="text-gray-500">Weight:</span>
                            <span className="ml-2 font-semibold">
                                {pokemon.weight.minimum} - {pokemon.weight.maximum}
                            </span>
                        </div>
                    </div>

                    <div className="space-y-3 mb-6">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Resistant to:</h3>
                            <div className="flex flex-wrap gap-2">
                                {pokemon.resistant.map((type) => (
                                    <span key={type} className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-700 mb-2">Weak against:</h3>
                            <div className="flex flex-wrap gap-2">
                                {pokemon.weaknesses.map((type) => (
                                    <span key={type} className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs">
                                        {type}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Attacks</h3>

                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">Fast Attacks</h4>
                        <div className="space-y-2">
                            {pokemon.attacks.fast.map((attack, idx) => (
                                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{attack.name}</span>
                                        <span className="text-sm text-gray-600">{attack.damage} dmg</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{attack.type}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 mb-3">Special Attacks</h4>
                        <div className="space-y-2">
                            {pokemon.attacks.special.map((attack, idx) => (
                                <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="font-medium">{attack.name}</span>
                                        <span className="text-sm text-gray-600">{attack.damage} dmg</span>
                                    </div>
                                    <div className="text-xs text-gray-500 mt-1">{attack.type}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {pokemon.evolutions && pokemon.evolutions.length > 0 && (
                <div className="border-t border-gray-200 p-8 bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Evolutions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {pokemon.evolutions.map((evolution) => (
                            <button
                                key={evolution.id}
                                onClick={() => handleEvolutionClick(evolution.name)}
                                className="p-4 bg-white rounded-lg hover:shadow-md transition-shadow text-center cursor-pointer border border-gray-200 hover:border-blue-300"
                            >
                                <img
                                    src={evolution.image}
                                    alt={evolution.name}
                                    className="w-20 h-20 mx-auto mb-2 object-contain"
                                    loading="lazy"
                                />
                                <div className="text-xs text-gray-500">#{evolution.number}</div>
                                <div className="font-medium capitalize text-sm">{evolution.name}</div>
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
});

PokemonResult.displayName = 'PokemonResult';

export default PokemonResult;