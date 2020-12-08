import React from 'react';
import Layout from '../layouts/Layout';
import Card from '../components/card';

export default function Alumnes() {
	const alumnes = [
		{
			nom: 'Alba',
			curs: '4ESO'
		}
		// {
		// 	nom: 'Miquel Cots',
		// 	curs: '2ESO'
		// },
		// {
		// 	nom: 'Eric Salvador',
		// 	curs: '3PRIMARIA'
		// },
		// {
		// 	nom: 'Berta',
		// 	curs: '4ESO'
		// },
		// {
		// 	nom: 'Aria Borrell',
		// 	curs: '2ESO'
		// },
		// {
		// 	nom: 'Xenia Borrell',
		// 	curs: '6PRIMARIA'
		// }
	];
	return (
		<Layout>
			<div className="w-full ">
				<h1 className="text-center font-bold text-3xl">Alumnes</h1>
				{alumnes.map((alumne, index) => <Card key={index} alumne={alumne} />)}
			</div>
		</Layout>
	);
}
