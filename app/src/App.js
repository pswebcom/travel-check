import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 2, description: "Charger", quantity: 1, packed: true },
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
  //todo:**So in React,for FORMS we usually like to keep all this state in just one central place.So inside the React application and not inside the DOM.And so in order to do that we use a technique called controlled elements.And so with this technique it is React who controls and owns the state of these input fields and no longer the DOM.So since we want to now keep this data,inside the application, what that means is that we need some state, right? Because that form data of course changes over time and we also want to maintain our application.

  //todo **so there are 3 steps

  //todo:** step 1-- create state
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={(e) => handleSubmit(e)}>
      <h3>What do you need for your trip 😊</h3>
      <select>
        {"//FIXME: we need 1 to 20 drop down"}

        {Array.from({ length: 20 }, (_, i) => i).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      {/* // todo *** step 2--use state as a value of input ie value={description} */}
      {/* // todo *** step 3--connect setDescription state func with user onChange */}
      event
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.quantity} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer>You have X items on your list, and you already packed x</footer>
  );
}
