import React from "react";

const initialState = [
  { id: 1, title: "Harry potter", price: "$230" },
  { id: 2, title: "SuperMan", price: "$30" }
];

function ListOfBooks() {
  const [list, setList] = React.useState(initialState);
  const deletePressed = id => {
    const newList = list.filter(item => item.id !== id);
    setList(newList);
  };
  return (
    <ul>
      {list.map(book => (
        <React.Fragment>
          <li key={book.id}>{book.title}</li>
          <button onClick={() => deletePressed(book.id)}> Remove</button>
        </React.Fragment>
      ))}
    </ul>
  );
}

export default ListOfBooks;
