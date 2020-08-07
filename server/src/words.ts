interface Word {
  id: string;
  categories: Category[];
  word: string;
}

interface Category {
  id: string;
  name: string;
}

const categories: Category[] = [{ id: "01", name: "fruits" }];

export const words: Word[] = [
  { id: "001", categories: [categories[0]], word: "apple" },
  { id: "002", categories: [categories[0]], word: "plum" },
  { id: "003", categories: [categories[0]], word: "pear" },
  { id: "004", categories: [categories[0]], word: "pineapple" },
  { id: "005", categories: [categories[0]], word: "orange" },
  { id: "006", categories: [categories[0]], word: "peach" },
  { id: "007", categories: [categories[0]], word: "grapefruit" },
  { id: "008", categories: [categories[0]], word: "apricot" },
  { id: "009", categories: [categories[0]], word: "mandarine" },
  { id: "010", categories: [categories[0]], word: "cherry" },
  { id: "011", categories: [categories[0]], word: "grapes" },
  { id: "012", categories: [categories[0]], word: "watermelon" },
  { id: "013", categories: [categories[0]], word: "lemon" },
  { id: "014", categories: [categories[0]], word: "leachee" },
  { id: "015", categories: [categories[0]], word: "strawberry" },
  { id: "016", categories: [categories[0]], word: "blueberry" },
  { id: "017", categories: [categories[0]], word: "carambola" },
  { id: "018", categories: [categories[0]], word: "pomagranate" },
  { id: "019", categories: [categories[0]], word: "coconut" },
  { id: "020", categories: [categories[0]], word: "kiwi" },
  { id: "021", categories: [categories[0]], word: "mango" },
];
