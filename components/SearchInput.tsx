'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const [searchValue, setSearchValue] = useState(query);

  useEffect(() => {
    setSearchValue(query);
  }, [query]);

  const handleSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      const trimmed = searchValue.trim();

      if (!trimmed) {
        router.push('/');
        return;
      }

      router.push(`/?q=${encodeURIComponent(trimmed.toLowerCase())}`);
    },
    [searchValue, router]
  );

  return (
    <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto mb-5">
      <div className="flex gap-2">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="Search for a Pokémon (e.g., Pikachu, Bulbasaur)..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <button
          type="submit"
          className="px-5 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
}
