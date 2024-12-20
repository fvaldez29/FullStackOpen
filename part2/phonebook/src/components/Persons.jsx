import { Person } from "./Person";

export const Persons = ({ persons, deletePerson  }) => {
  return (
    <div>
     {persons.map((person) => (
        <Person key={person.id} person={person} deletePerson={() => deletePerson(person.id)}/>
      ))}
    </div>
  );
};
