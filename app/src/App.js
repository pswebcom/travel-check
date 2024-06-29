const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far away</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What do you need for your trip</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div>
      <ul>
        {/* {initialItems.map((item) => (
        <Item item={item} />
      ))} */}

        {initialItems.map((item) => (
          <Item item={item.description} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return <li>{item}</li>;
}

function Stats() {
  return (
    <footer>You have X items on your list, and you already packed x</footer>
  );
}
