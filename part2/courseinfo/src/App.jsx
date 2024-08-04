const Header = ({ title }) => {
	return <h1>{title}</h1>;
};

const Part = ({ part }) => {
	return (
		<p>
			{part.name} {part.exercises}
		</p>
	);
};

const Content = ({ parts }) => {
	return (
		<>
			{parts.map((part) => (
				<Part key={part.id} part={part} />
			))}
		</>
	);
};

const TotalExercises = ({ parts }) => {
	// get the sum of all exercises
	const totalExercises = parts.reduce(
		(total, part) => (total += part.exercises),
		0
	);

	return (
		<div style={{ fontWeight: "bold" }}>
			total of {totalExercises} exercises
		</div>
	);
};

const Course = ({ course }) => {
	return (
		<div>
			<Header title={course.name} />
			<Content parts={course.parts} />
			<TotalExercises parts={course.parts} />
		</div>
	);
};

const App = () => {
	const course = {
		id: 1,
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
				id: 1,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
				id: 2,
			},
			{
				name: "State of a component",
				exercises: 14,
				id: 3,
			},
			{
				name: "Redux",
				exercises: 11,
				id: 4,
			},
		],
	};

	return <Course course={course} />;
};

export default App;
