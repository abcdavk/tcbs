"use client"

import { useState } from 'react';
import { MdOutlineClose, MdOutlineMenu, MdArrowBack, MdOutlineHome } from 'react-icons/md';

import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Navbar({children}) {
	const router = useRouter()
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sticky top-24 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		
			{!isDropdownOpen && (
				<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
					<MdOutlineMenu
						onClick={handleToggleDropdown}
						className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md scale-[1.2] hover:scale-[1.4] transition-transform cursor-pointer"
						aria-hidden="true"
					/>
					{children}
				</div>
			)}
			{isDropdownOpen && (
				<>
					<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
						<MdOutlineClose
							onClick={handleToggleDropdown}
							className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md scale-[1.2] hover:scale-[1.4] transition-transform cursor-pointer"
							aria-hidden="true"
						/>
						<div className="items-center">
							<div className="grid grid-cols-1 gap-2">
								<div className=""><p>Where are you going?...</p></div>
								<Link href="/packages"><div className="border border-neutral-700 rounded-lg hover:scale-[1.02]">../packages | Find packages</div></Link>
								
								<Link href="/discuss"><div className="border border-neutral-700 rounded-lg hover:scale-[1.02]">../Discuss | Join our forum</div></Link>
							</div>
						</div>
					</div>
				</>
			)}
			<div className="fixed bottom-0 left-0 flex sm:h-48 w-full items-end justify-center bg-gradient-to-t from-black via-black">
				<button
					className="flex place-items-center gap-2 p-8 hover:scale-[1.1] transition-transform"
					type="button"
					onClick = {() => router.back()}
				>
					<div className="font-mono hover:underline flex">
						<MdArrowBack
							className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md backdrop-blur-2xl"
							aria-hidden="true"
						/>
						Previous
					</div>
				</button>
				<Link href="/">
					<div className="flex place-items-center gap-2 p-8 hover:scale-[1.1] transition-transform font-mono hover:underline flex">
						<MdOutlineHome
							className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md backdrop-blur-2xl"
							aria-hidden="true"
						/>
						Back to Home
					</div>
				</Link>
			</div>
    </div>
  );
}
