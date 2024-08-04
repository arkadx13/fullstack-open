const Header = ({ title }) => {
	return <h2>{title}</h2>;
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
	const courses = [
		{
			name: "Half Stack application development",
			id: 1,
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
		},
		{
			name: "Node.js",
			id: 2,
			parts: [
				{
					name: "Routing",
					exercises: 3,
					id: 1,
				},
				{
					name: "Middlewares",
					exercises: 7,
					id: 2,
				},
			],
		},
	];

	return (
		<div>
			<h1>Web development curriculum</h1>
			{courses.map((course) => (
				<Course key={course.id} course={course} />
			))}
		</div>
	);
};

export default App;
