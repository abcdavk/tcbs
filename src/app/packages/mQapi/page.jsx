import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../../lib/packs'
import { Navbar, Logo, Content } from '../../components'

export default function Packages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
		<Navbar>myQuestAPI</Navbar>
		<Logo />
		<Content>
			<p className="text-lg font-bold">myQuestAPI</p>
				
			<p className="font-light mb-6">Make quests easily without having to type a lot of code with Open Source Quests. Without any limitations. Support custom items and blocks. Compatible with all addons and latest versions of Minecraft.</p>
			
			<a href="https://github.com/abcdavk/mQapi/releases" className="border border-blue-600 rounded-md bg-blue-500/30 hover:border-blue-800 hover:bg-blue-700/30 px-2 py-2">Download Latest on Github</a>
		</Content>
	</main>
  );
};