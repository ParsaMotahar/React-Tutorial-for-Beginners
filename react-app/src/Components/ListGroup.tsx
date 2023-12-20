function ListGroup() {
  let items = ["a"];
  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No Items</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={() => console.log(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
