import Contact from "./Contact";

const Persons = ({ personsToShow, handleDelete }) => {
	return (
		<>
			{personsToShow.map((person) => (
				<Contact
					key={person.name}
					person={person}
					handleDelete={() => handleDelete(person.id)}
				/>
			))}
		</>
	);
};

export default Persons;
