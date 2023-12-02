"use client"

import { useState } from 'react';
import { MdOutlineClose, MdOutlineMenu, MdArrowBack } from 'react-icons/md';

import Link from 'next/link';

export default function Navbar() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleToggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="sticky top-24 z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
		
			{!isDropdownOpen && (
				<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
					<MdOutlineMenu
						onClick={handleToggleDropdown}
						className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md scale-[1.2] hover:scale-[1.4] transition-transform cursor-pointer"
						aria-hidden="true"
					/>
					Select the pack you want to install
				</div>
			)}
			{isDropdownOpen && (
				<>
					<div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 h-48 items-center">
						<MdOutlineClose
							onClick={handleToggleDropdown}
							className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md scale-[1.2] hover:scale-[1.4] transition-transform cursor-pointer"
							aria-hidden="true"
						/>
						<div className="grid grid-cols-1 gap-2">
							<div><p>Select the pack you want to install</p></div>
							<Link href="/packages"><div className="border border-neutral-700 rounded-lg hover:scale-[1.02]">../packages | Find packages</div></Link>
							<Link href="/discuss"><div className="border border-neutral-700 rounded-lg hover:scale-[1.02]">../discuss | Join our forum</div></Link>
						</div>
					</div>
				</>
			)}
			<div className="fixed bottom-0 left-0 flex sm:h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
				<Link
					className="flex place-items-center gap-2 p-8 hover:scale-[1.1] transition-transform"
					href="/"
					rel="noopener noreferrer"
				>
					<div className="font-mono hover:underline flex">
						<MdArrowBack
							className="block h-6 w-6 mr-4 border border-neutral-800 rounded-md backdrop-blur-2xl"
							aria-hidden="true"
						/>
						Back To Index
					</div>
				</Link>
			</div>
    </div>
  );
}
