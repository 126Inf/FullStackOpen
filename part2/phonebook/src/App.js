import { useState, useEffect } from "react";
import Numbers from "./components/Numbers";
import phoneServices from "./services/phonebook";
import Message from "./components/Message";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filteredList, setFilteredList] = useState([...persons]);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    phoneServices.getAll().then((phoneNumbers) => {
      setFilteredList(phoneNumbers);
      setPersons(phoneNumbers);
    });
  }, []);

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

    phoneServices
      .addEntry({ name: newName, number: newNumber })
      .then((res) => {
        setPersons(persons.concat(res));
        setFilteredList(filteredList.concat(res));
        setNewName("");
        setNewNumber("");
        handleFilterChange(e);
        setSuccessMessage(`${newName} was successfully added`);
        setTimeout(() => {
          setSuccessMessage(null);
        }, 5000);
      })
      .catch((error) => {
        window.alert("There was an error");
      });
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  const handleDelete = (id) => {
    phoneServices.deleteEntry(id)
    .then(() => {
      phoneServices.getAll().then((phoneNumbers) => {
        console.log(phoneNumbers);
        setFilteredList(phoneNumbers);
        setPersons(phoneNumbers);
      });
    });
  }

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    let subset = [];
    if (filterValue === undefined) {
      return filteredList;
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
      <Message message={successMessage}/>
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
          return <Numbers person={person} key={person.name} deletebutton={() => handleDelete(person.id)}/>;
        })}
      </ul>
    </div>
  );
};

export default App;
