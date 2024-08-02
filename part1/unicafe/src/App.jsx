import { useState } from "react";

const FeedbackButton = ({ onClick, text }) => (
	<button onClick={onClick}>{text}</button>
);

const FeedbackStatistics = ({ value, text }) => {
	console.log(text, value);

	return (
		<div>
			{text} {value}
		</div>
	);
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);
	const feedbackCounts = good + neutral + bad;
	// Scoring => good: 1, neutral: 0, bad: -1
	const totalScore = good - bad;
	const averageScore = totalScore / feedbackCounts;
	const positivePercentage = (good / feedbackCounts) * 100;

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
			<FeedbackStatistics value={good} text="good" />
			<FeedbackStatistics value={neutral} text="neutral" />
			<FeedbackStatistics value={bad} text="bad" />
			<FeedbackStatistics value={feedbackCounts} text="all" />
			<FeedbackStatistics value={averageScore || 0} text="average" />
			<FeedbackStatistics
				value={positivePercentage || 0}
				text="positive"
			/>
		</div>
	);
};

export default App;
