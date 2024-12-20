export const Person = ({ person, deletePerson }) => {
  return (
    <>
      <p>
        {person.name}: {person.phone}  <button onClick={deletePerson}>delete</button>
      </p>
     
    </>
  );
};
