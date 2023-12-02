import Link from 'next/link';
import Image from 'next/image';

import { packs } from '../lib/packs'
import Navbar from '../components/Navbar'

export default function Packages() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24">
		<Navbar />
		<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-200 after:via-red-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-red-700 before:dark:opacity-10 after:dark:from-red-900 after:dark:via-red after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
			<Link
				href="/"
			>
				<Image
					className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]"
					src="/tcbs.png"
					alt="TCBS Logo"
					width={180}
					height={180}
					priority
				/>
			</Link>
		</div>
		<div className="mt-24 mb-32 grid text-left md:max-w-5xl md:w-full md:mb-0 md:grid-cols-2 md:gap-4 pb-24">
		  {packs.map((pack) => {
			  return (
				<Link
				  href={'/packages/' + pack.repo}
				  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30 md:border-gray-300 md:bg-gray-100 md:dark:border-neutral-700 md:dark:bg-neutral-800/30 md:hover:border-gray-100 md:hover:bg-gray-200 md:hover:dark:border-neutral-400 md:hover:dark:bg-neutral-500/30 flex"
				>
				  <div style={{ height:'100px', width:'100px' }} className="mr-6 mt-2">
					  <Image
						className="rounded-lg border-b border-neutral-800"
						src={pack.icon}
						alt={pack.name}
						width={100}
						height={100}
						priority
					  />
				  </div>
				  <div className="flex flex-wrap max-w-sm">
					  <h2 className={`mb-3 text-2xl font-semibold`}>
						  {pack.name} {' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						  -&gt;
						</span>
					  </h2>
					  <div className="border-t border-white my-1"> </div>
					  <p className={`m-0 max-w-[30ch] text-sm opacity-50 max-w-lg`}>
						  {pack.description}
					  </p>
				  </div>
				</Link>
			  );
		  })}
		</div>
	</main>
  );
};