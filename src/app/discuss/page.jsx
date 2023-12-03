import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../lib/packs'
import { Navbar, Logo, Content } from '../components'

export default function Discuss() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
		<Navbar>Discuss</Navbar>
		<Logo />
		<Content>
			<p className="text-lg font-bold">Discuss</p>
				
			<p className="font-light mb-6">The platform we use to communicate and discuss is Discord. Let's join our discord server.</p>
			
			<a href="https://discord.com/invite/ZeVUDhuwpG" className="border border-blue-600 rounded-md bg-blue-500/30 hover:border-blue-800 hover:bg-blue-700/30 px-2 py-2">Join Discord</a>
		</Content>
	</main>
  );
};