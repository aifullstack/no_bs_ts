// T 这里是type的param，就是可以接受任何type，作为param传进后面的函数。

import { isPlusToken } from "typescript";

function simpleState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [() => val, (v: T) => (val = v)];
}

const [st1getter, st1setter] = simpleState(10);
console.log(st1getter());
console.log(st1setter(62));

const [st2getter, st2setter] = simpleState<string | null>(null);
console.log(st2getter());
console.log(st2setter("62"));

// RankItem 和T一样，也是 generic type
interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  // interface Rank {
  //   item: RankItem; // 这里的RankItem从L16的param传进来
  //   rank: number;
  // }

  //L30 RankItem传给L16
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));
  ranks.sort((a, b) => a.rank - b.rank);
  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "bulbasaur",
    hp: 20,
  },
  {
    name: "megaasaur",
    hp: 5,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
