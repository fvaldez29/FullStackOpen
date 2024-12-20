import { useEffect, useState } from "react";
import { Filter } from "./components/Filter";
import { PersonForm } from "./components/PersonForm";
import { Persons } from "./components/Persons";
import personService from "./services/personService";
import { Notification } from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [phone, setPhone] = useState('');
  const [filter, setFilter] = useState('');
  const [error, setError] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      }).catch(error => {
        console.log(error)
      })
  }, [])


  const addPerson = (event) => {
    event.preventDefault();
    const person = persons.find((person) => person.name === newName);
    if (person) {
      const result = window.confirm('Name already exists, replace the old number with a new one?');
      if (result) {
        const changedPerson = { ...person, phone: phone };
        personService.update(person.id, changedPerson).then((response) => {
          setPersons(persons.map((person) => (person.id !== response.id ? person : response)));
          setNewName("");
          setPhone("");
        }
        ).catch(error => {
          console.log('error updating person', error)
          setError(`Information of ${person.name} has already been updated from the server`)
          setTimeout(() => {
            setError(null)
          }, 5000)
        })
      }
    }
    else {
      const newPerson = {
        id: `${persons.length + 1}`,
        name: newName,
        phone: phone,
      };
      personService.create(newPerson).then((response) => {
        setPersons(persons.concat(response));
        setNewName("");
        setPhone("");
        setError(`Added ${newPerson.name}`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      }).catch(error => {
        console.log('error adding person', error)
        setError(`Information of ${newPerson.name} has already been added to the server`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      })
    }
  };

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase())
  );


  const deletePerson = (id) => {
    const person = persons.find((person) => person.id === id);
    const result = window.confirm(`Delete ${person.name}?`);
    if (result) {
      personService.getDelete(id).then(() => {
        setPersons(persons.filter((person) => person.id !== id));
        setError(`Information of ${person.name} has already been removed from the server`)
        setTimeout(() => {
          setError(null)
        }, 5000)
      }).catch(error => {
        console.log('error deleting person', error)
        
      })
    }
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <Notification message={error} />
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        phone={phone}
        handlePhoneChange={handlePhoneChange}
      />
      <h3>Numbers</h3>
      <Persons persons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
