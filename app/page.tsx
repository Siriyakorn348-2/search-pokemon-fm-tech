'use client';

import { Suspense, useEffect, useState } from 'react';
import { ApolloProvider, useQuery } from '@apollo/client/react';
import { useSearchParams } from 'next/navigation';
import client from '@/lib/apollo-client';
import { GET_POKEMON } from '@/lib/queries';
import SearchInput from '@/components/SearchInput';
import PokemonResult from '@/components/PokemonResult';
import PokemonNotFound from '@/components/PokemonNotFound';
import type { Pokemon } from '@/lib/types';

function PokemonSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q');
  const [shouldFetch, setShouldFetch] = useState(false);

  useEffect(() => {
    setShouldFetch(!!query);
  }, [query]);

  const { loading, error, data } = useQuery<{ pokemon: Pokemon }>(GET_POKEMON, {
    variables: { name: query },
    skip: !shouldFetch || !query,
  });

  return (
    <>
      <SearchInput />

      {loading && (
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Searching for Pokémon...</p>
        </div>
      )}

      {!loading && query && !data?.pokemon && (
        <PokemonNotFound searchQuery={query} />
      )}


      {data?.pokemon && !loading && (
        <PokemonResult pokemon={data.pokemon} />
      )}
    </>
  );
}

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Suspense fallback={
        <div className="text-center py-16">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      }>
        <PokemonSearch />
      </Suspense>
    </ApolloProvider>
  );
}