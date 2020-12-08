import React from 'react';
import { ImUsers, ImStatsDots, ImTable } from 'react-icons/im';
import Link from 'next/link';

export default function SideBar() {
	return (
		<div className="w-28 h-screen bg-gray-800 ">
			<h1 className="text-center font-bold text-lg border-b-2">Admin</h1>
			<Link href="/alumnes">
				<a>
					<ImUsers className="h-8 w-8 mx-auto my-3" />
				</a>
			</Link>
			<Link href="">
				<a>
					<ImTable className="h-8 w-8 mx-auto my-3" />
				</a>
			</Link>
			<Link href="/diagrames">
				<a>
					<ImStatsDots className="h-8 w-8 mx-auto my-3" />
				</a>
			</Link>
		</div>
	);
}
