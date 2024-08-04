import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const Contact = ({ person }) => {
	return (
		<p>
			{person.name} {person.number}
		</p>
	);
};

const App = () => {
	const [persons, setPersons] = useState([
		{ name: "Arto Hellas", number: "040-123456", id: 1 },
		{ name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
		{ name: "Dan Abramov", number: "12-43-234345", id: 3 },
		{ name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
	]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [keyword, setKeyword] = useState("");
	const [filteredPersons, setFilteredPersons] = useState([]);
	const personsToShow = keyword === "" ? persons : filteredPersons;

	const handleAddContact = (event) => {
		event.preventDefault();

		// check if contact exists already
		const isExisting = persons.find((person) => person.name === newName);

		if (isExisting) {
			alert(`${newName} is already added to phonebook`);
			return;
		}

		// make sure all fields submitted are filled
		if (newName.trim() !== "" && newNumber.trim() !== "") {
			const newPerson = {
				name: newName.trim(),
				number: newNumber.trim(),
				id: persons.length + 1,
			};

			setPersons(persons.concat(newPerson));
			setNewName("");
			setNewNumber("");
			// to reset search and show all contacts
			setKeyword("");
		}
	};

	const handleFilter = (event) => {
		const search = event.target.value.toLowerCase();
		const filtered = persons.filter((person) =>
			person.name.toLowerCase().includes(search)
		);

		setKeyword(event.target.value);
		setFilteredPersons(filtered);
	};

	// const filteredPersons =
	return (
		<div>
			<h2>Phonebook</h2>
			<Filter keyword={keyword} handleFilter={handleFilter} />
			<h3>add a new</h3>
			<PersonForm
				newName={newName}
				newNumber={newNumber}
				handleAddContact={handleAddContact}
				setNewName={setNewName}
				setNewNumber={setNewNumber}
			/>
			<h3>Numbers</h3>
			<Persons personsToShow={personsToShow} />
		</div>
	);
};

export default App;
