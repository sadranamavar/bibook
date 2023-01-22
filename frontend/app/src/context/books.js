import { createContext } from "react";

const BookList = createContext(
  {
    title: "mybook",
    books: [
      {
        id: 1,
        name: "book",
        image: ""
      },
      {
        id: 2,
        name: "book",
        image: ""
      },
      {
        id: 3,
        name: "book",
        image: ""
      },
      {
        id: 4,
        name: "book",
        image: ""
      },
      {
        id: 5,
        name: "book",
        image: ""
      },
    ],
  },
);

export default BookList;
