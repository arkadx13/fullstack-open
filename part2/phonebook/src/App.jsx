import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personServices from "./services/persons";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [keyword, setKeyword] = useState("");
	const [filteredPersons, setFilteredPersons] = useState([]);
	const personsToShow = keyword === "" ? persons : filteredPersons;

	useEffect(() => {
		personServices.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

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
			};

			personServices.create(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				setNewName("");
				setNewNumber("");
				// to reset search and show all contacts
				setKeyword("");
			});
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
