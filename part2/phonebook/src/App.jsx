import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import personService from "./services/persons";
import Notification from "./components/Notification";

const App = () => {
	const [persons, setPersons] = useState([]);
	const [newName, setNewName] = useState("");
	const [newNumber, setNewNumber] = useState("");
	const [keyword, setKeyword] = useState("");
	const [filteredPersons, setFilteredPersons] = useState([]);
	const [message, setMessage] = useState({ content: null, type: null });
	const personsToShow = keyword === "" ? persons : filteredPersons;

	useEffect(() => {
		personService.getAll().then((initialPersons) => {
			setPersons(initialPersons);
		});
	}, []);

	const handleAddContact = (event) => {
		event.preventDefault();
		const personName = newName.trim();
		const personNumber = newNumber.trim();
		// check if contact exists already
		const person = persons.find((person) => person.name === personName);

		if (person) {
			if (
				window.confirm(
					`${person.name} is already added to phonebook, replace the old number with the new one?`
				)
			) {
				const updatedContact = { ...person, number: personNumber };

				personService
					.updateContact(person.id, updatedContact)
					.then((returnedPerson) => {
						setPersons(
							persons.map((contact) =>
								contact.id !== person.id
									? contact
									: returnedPerson
							)
						);
						// Notification for changing number
						setMessage({
							content: `${person.name}'s number successfully changed`,
							type: "message",
						});

						setTimeout(() => {
							setMessage({
								content: null,
								type: null,
							});
						}, 5000);
					})
					.catch((error) => {
						// Notification for unsuccessful changing of number
						setMessage({
							content: `Changing number for ${person.name} unsuccessful`,
							type: "error",
						});

						setTimeout(() => {
							setMessage({
								content: null,
								type: null,
							});
						}, 5000);
						console.log(error);
					});
			}
		} else if (personName !== "" && personNumber !== "") {
			// Check and make sure all fields submitted are filled
			// create object to be send to server
			const newPerson = {
				name: personName,
				number: personNumber,
			};

			personService.createContact(newPerson).then((returnedPerson) => {
				setPersons(persons.concat(returnedPerson));
				// Notification for successful addition of new contact
				setMessage({
					content: `Added ${returnedPerson.name}`,
					type: "message",
				});

				setTimeout(() => {
					setMessage({ content: null, type: null });
				}, 5000);
			});
		}

		// reset form
		setNewName("");
		setNewNumber("");
		// reset search and show all contacts
		setKeyword("");
	};

	const handleDelete = (id) => {
		const person = persons.find((person) => person.id === id);
		if (window.confirm(`Delete ${person.name}?`)) {
			personService
				.removeContact(id)
				.then((removedContact) => {
					// if successfully deleted
					setPersons(
						persons.filter(
							(person) => person.id !== removedContact.id
						)
					);
					// Notification for successfull deletion
					setMessage({
						content: `${person.name} successfully deleted.`,
						type: "message",
					});

					setTimeout(() => {
						setMessage({ content: null, type: null });
					}, 5000);

					// to reset search and show all contacts if search input was filled
					setKeyword("");
				})
				.catch((error) => {
					// Notifcation for error
					setMessage({
						content: `Information of ${person.name} has already been removed from server`,
						type: "error",
					});

					setTimeout(() => {
						setMessage({ content: null, type: null });
					}, 5000);
					console.log(error);
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
			<Notification message={message.content} type={message.type} />
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
			<Persons
				personsToShow={personsToShow}
				handleDelete={handleDelete}
			/>
		</div>
	);
};

export default App;
