import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../../lib/packs'
import Navbar from '../../components/Navbar'

export default function Packages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24">
		<Navbar />
		
		<div className="mt-24 mb-32 grid text-left md:max-w-5xl md:w-full md:mb-0 md:grid-cols-2 md:gap-4 pb-24">
		  myQuestAPI
		</div>
	</main>
  );
};