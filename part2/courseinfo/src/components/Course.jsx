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

export default Course;
