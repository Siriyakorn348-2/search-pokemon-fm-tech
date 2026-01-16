export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Evolution {
  id: string;
  name: string;
  number: string;
  image: string;
}

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
  classification: string;
  resistant: string[];
  weaknesses: string[];
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions: Evolution[];
}