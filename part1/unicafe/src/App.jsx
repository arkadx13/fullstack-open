import { useState } from "react";

const FeedbackButton = ({ onClick, text }) => (
	<button onClick={onClick}>{text}</button>
);

const FeedbackTally = ({ value, text }) => (
	<div>
		{text} {value}
	</div>
);

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodFeedback = () => setGood(good + 1);
	const handleNeutralFeedback = () => setNeutral(neutral + 1);
	const handleBadFeedback = () => setBad(bad + 1);

	return (
		<div>
			<h1>give feedback</h1>
			<FeedbackButton onClick={handleGoodFeedback} text="good" />
			<FeedbackButton onClick={handleNeutralFeedback} text="neutral" />
			<FeedbackButton onClick={handleBadFeedback} text="bad" />

			<h1>statistics</h1>
			<FeedbackTally value={good} text="good" />
			<FeedbackTally value={neutral} text="neutral" />
			<FeedbackTally value={bad} text="bad" />
		</div>
	);
};

export default App;
