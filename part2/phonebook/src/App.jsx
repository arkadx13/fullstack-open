import { useState } from "react";

const Contact = ({ person }) => {
	return (
		<p>
			{person.name} {person.number}
		</p>
	);
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-1234567" },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");

	const handleAddContact = (event) => {
		event.preventDefault();

		// check if contact exists already
		const isExisting = persons.find((person) => person.name === newName);

		if (isExisting) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		// make sure all fields submitted are filled
		if (newName !== "" && newNumber !== "") {
			const newPerson = {
				name: newName,
				number: newNumber,
			};

			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
		}
	};

	return (
		<div>
			<h2>Phonebook</h2>
			<form onSubmit={handleAddContact}>
				<div>
					name:{" "}
					<input
						value={newName}
						onChange={(event) => setNewName(event.target.value)}
					/>
				</div>
				<div>
					number:{" "}
					<input
						value={newNumber}
						onChange={(event) => setNewNumber(event.target.value)}
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
