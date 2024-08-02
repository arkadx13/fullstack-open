import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StatisticsLine = ({ value, text }) => {
	return (
		<tr>
			<th>{text}</th>
			<td>{value}</td>
		</tr>
	);
};

const Statistics = ({
	good,
	neutral,
	bad,
	feedbackCounts,
	averageScore,
	positivePercentage,
}) => {
	return (
		<table style={{ textAlign: "left" }}>
			<tbody>
				<StatisticsLine value={good} text="good" />
				<StatisticsLine value={neutral} text="neutral" />
				<StatisticsLine value={bad} text="bad" />
				<StatisticsLine value={feedbackCounts} text="all" />
				<StatisticsLine value={averageScore || 0} text="average" />
				<StatisticsLine
					value={positivePercentage || 0}
					text="positive"
				/>
			</tbody>
		</table>
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
			<Button onClick={handleGoodFeedback} text="good" />
			<Button onClick={handleNeutralFeedback} text="neutral" />
			<Button onClick={handleBadFeedback} text="bad" />

			<h1>statistics</h1>
			{feedbackCounts === 0 ? (
				<div>No feedback given</div>
			) : (
				<Statistics
					good={good}
					neutral={neutral}
					bad={bad}
					feedbackCounts={feedbackCounts}
					averageScore={averageScore}
					positivePercentage={positivePercentage}
				/>
			)}
		</div>
	);
};

export default App;
