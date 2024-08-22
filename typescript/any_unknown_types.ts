/*
    any:
        - Special type that tells TS to ignore type checking around this variable
        - Avoid using any since it circumvents TS (but is used by 3rd party libraries)
        - Use an 'as' type assertion to forcibly tell TS what an 'any' varriable's type is

    unknown:
        - Special type that tells TS this variable can be anything
        - Have to do aggressive type narrowing before assuming what an 'unknown' variable's real type is

    - async functions return a Promise<returnType>
*/

interface Book {
  title: string;
}

async function fetchBook(): Promise<Book> {
  const res = await fetch('/book');
  const data: unknown = await res.json(); // data is type any

  //   data.asdaf.sdfsdfs.sdf; // No type checking since type any

  if (
    data &&
    typeof data === 'object' &&
    'title' in data &&
    typeof data.title === 'string'
  ) {
    return data as Book;
  } else {
    throw new Error("Expected to get a book, but didn't");
  }
}

async function run() {
  const book: Book = await fetchBook();
}
