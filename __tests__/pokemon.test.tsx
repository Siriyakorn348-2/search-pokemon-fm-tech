import { render, screen } from '@testing-library/react';
import PokemonResult from '@/components/PokemonResult';
import type { Pokemon } from '@/lib/types';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    prefetch: jest.fn(),
  }),
}));

/* ---------------- Mock Data ---------------- */

const bulbasaur: Pokemon = {
  id: '001',
  number: '001',
  name: 'Bulbasaur',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  types: ['Grass', 'Poison'],
  classification: 'Seed Pokémon',
  resistant: ['Water'],
  weaknesses: ['Fire'],
  weight: { minimum: '6kg', maximum: '7kg' },
  height: { minimum: '0.6m', maximum: '0.8m' },
  fleeRate: 0.1,
  maxCP: 1115,
  maxHP: 1071,
  attacks: {
    fast: [{ name: 'Vine Whip', type: 'Grass', damage: 7 }],
    special: [{ name: 'Power Whip', type: 'Grass', damage: 70 }],
  },
  evolutions: [
    {
      id: '002',
      name: 'Ivysaur',
      number: '002',
      image: 'https://img.pokemondb.net/artwork/ivysaur.jpg',
    },
  ],
};

const charmander: Pokemon = {
  ...bulbasaur,
  id: '004',
  number: '004',
  name: 'Charmander',
  types: ['Fire'],
};

const squirtle: Pokemon = {
  ...bulbasaur,
  id: '007',
  number: '007',
  name: 'Squirtle',
  types: ['Water'],
};

/* ---------------- Tests ---------------- */

describe('PokemonResult', () => {
  test('Bulbasaur should have Grass type', () => {
    render(<PokemonResult pokemon={bulbasaur} />);
    expect(screen.getAllByText('Grass').length).toBeGreaterThan(0);
  });

  test('Charmander should have Fire type', () => {
    render(<PokemonResult pokemon={charmander} />);
    expect(screen.getAllByText('Fire').length).toBeGreaterThan(0);
  });

  test('Squirtle should have Water type', () => {
    render(<PokemonResult pokemon={squirtle} />);
    expect(screen.getAllByText('Water').length).toBeGreaterThan(0);
  });

  test('should display attacks section', () => {
    render(<PokemonResult pokemon={bulbasaur} />);
    expect(screen.getByText('Fast Attacks')).toBeInTheDocument();
    expect(screen.getByText('Special Attacks')).toBeInTheDocument();
    expect(screen.getByText('Vine Whip')).toBeInTheDocument();
  });

  test('should display evolutions', () => {
    render(<PokemonResult pokemon={bulbasaur} />);
    expect(screen.getByText('Evolutions')).toBeInTheDocument();
    expect(screen.getByText('Ivysaur')).toBeInTheDocument();
  });
});
