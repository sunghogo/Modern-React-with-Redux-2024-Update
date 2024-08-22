/*
    Generics with fetch:
        - Fetch returns data that is type any
        - Can use generics to create a generic fetch function to fetch and return different types of data
*/

interface User {
  username: string;
}

interface Message {
  content: string;
}

interface Image {
  url: string;
}

// async function fetchUser() {
//   const res = await fetch('/users');
//   const json = await res.json();

//   return json as User; // No type checking for this example, but should
// }

// async function fetchMessage() {
//   const res = await fetch('/messages');
//   const json = await res.json();

//   return json as Message; // No type checking for this example, but should
// }

async function fetchData<T>(path: string): Promise<T> {
  const res = await fetch(path);
  const json = await res.json();

  return json as T;
}

const runner = async () => {
  //   const user = await fetchUser();
  const user = await fetchData<User>('./users');
  const message = await fetchData<Message>('./messages');
  const image = await fetchData<Image>('./images');
};
