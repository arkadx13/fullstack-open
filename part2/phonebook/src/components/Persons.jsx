import Contact from "./Contact";

const Persons = ({ personsToShow }) => {
	return (
		<>
			{personsToShow.map((person) => (
				<Contact key={person.name} person={person} />
			))}
		</>
	);
};

export default Persons;
