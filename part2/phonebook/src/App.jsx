import { useState } from "react";

const Contact = ({ person }) => {
	return <p>{person.name}</p>;
};

const App = () => {
	const [persons, setPersons] = useState([{ name: "Arturo Hellas" }]);
	const [newName, setNewName] = useState("");

	const handleAddContact = (event) => {
		event.preventDefault();
		const newPerson = {
			name: newName,
		};

		setPersons(persons.concat(newPerson));
		setNewName("");
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleAddContact}>
				<div>
					name:{" "}
					<input
						value={newName}
						onChange={() => setNewName(event.target.value)}
					/>
				</div>
				<div>
					<button type="submit">add</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person) => (
				<Contact key={person.name} person={person} />
			))}
		</div>
	);
};

export default App;
