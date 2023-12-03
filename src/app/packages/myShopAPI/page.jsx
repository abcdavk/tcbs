import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../../lib/packs'
import { Navbar, Logo, Content } from '../../components'

export default function Packages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 pt-24">
		<Navbar>myShopLoader</Navbar>
		<Logo />
		<Content>
			<p className="text-lg font-bold">myShopLoader</p>
				
			<p className="font-light mb-6">Easily create a shop system without typing a lot of code with myShopLoader. mSL will process everything you enter in the configuration file, then turn it into a form UI shop. Starting in version 2.0 you can create unlimited shop categories.</p>
			
			<a href="https://github.com/abcdavk/myShopAPI/releases" className="border border-green-600 rounded-md bg-green-500/30 hover:border-green-800 hover:bg-green-700/30 px-2 py-2">Download Latest on Github</a>
		</Content>
	</main>
  );
};