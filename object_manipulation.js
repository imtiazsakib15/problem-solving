const books = [
  { title: "The Pragmatic Programmer", author: "Andrew Hunt", year: 1999 },
  { title: "Clean Code", author: "Robert C. Martin", year: 2008 },
  { title: "You Don't Know JS", author: "Kyle Simpson", year: 2015 },
  { title: "Atomic Habits", author: "James Clear", year: 2018 },
];

const printTitles = () => {
  const names = books.map((book) => book.title);
  return names;
};

const bookTitles = printTitles(books);

console.log(bookTitles);
