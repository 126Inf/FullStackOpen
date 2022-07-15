import { useState} from "react";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-1234567" },
  ]);

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState([...persons]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const duplicate = persons.filter((person) => {
      return person.name === newName;
    });

    if (newName === "") {
      return;
    }

    if (duplicate.length > 0) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }

    setPersons(persons.concat({ name: newName, number: newNumber }));
    setFilteredList(filteredList.concat({ name: newName, number: newNumber }));
    setNewName("");
    setNewNumber("");
    handleFilterChange(e);
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    let subset = [];
    if (filterValue === undefined) {
      return;
    }

    for (let i = 0; i < persons.length; i++) {
      const person = persons[i];

      if (
        person.name
          .toLocaleLowerCase()
          .includes(filterValue.toLocaleLowerCase())
      ) {
        subset.push(person);
      }
    }

    setFilteredList(subset);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        <div>
          Filter shown with: <input onChange={handleFilterChange} />
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredList.map((person) => {
          return <Numbers person={person} key={person.name} />;
        })}
      </ul>
    </div>
  );
};

export default App;
