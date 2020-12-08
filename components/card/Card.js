import React from 'react';

export default function Card({ alumne }) {
	return (
		<div className="flex flex-column border text-red-500 rounded-lg">
			<div className="text-center">
				<h1 className="text-center">{alumne.nom}</h1>
				<h2>{alumne.curs}</h2>
			</div>
		</div>
	);
}
