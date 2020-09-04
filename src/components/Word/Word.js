import React from 'react';

export default function Word(props) {
	if (!props.word) {
		return <p>Loading...</p>;
	}
	return (
		<li>
			<h4>{`${props.word.original} (${props.word.translation})`}</h4>
			<p>{`correct: ${props.word.correct_count} incorrect: ${props.word.incorrect_count}`}</p>
		</li>
	);
}
