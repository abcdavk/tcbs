import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../../lib/packs'
import { Navbar, Logo, Content } from '../../components'

export default function Packages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
		<Navbar>Just Biome</Navbar>
		<Logo />
		<Content>
			<p className="text-lg font-bold">Just Biome</p>
				
			<p className="font-light mb-4">
			Just biome is a bedrock Minecraft addon focused on exploration and biomes.</p>
			
			<p className="font-light mb-12">This addon is still <span className="text-red-400">under development</span>, I still have a lot to fix, and there are still a lot of vanilla biomes that I haven't recreated yet. In the future, I will add more biomes and structures and maybe also add new blocks to make playing Minecraft more fun.
			</p>
			
			<a href="https://link-hub.net/458038/just-biome-201" className="border border-yellow-600 rounded-md bg-yellow-500/30 hover:border-yellow-800 hover:bg-yellow-700/30 px-2 py-2">Download Beta on Github</a>
		</Content>
	</main>
  );
};