import Link from 'next/link';
import Image from 'next/image';

import { Logo } from './components'

export const getRandomWelcome = () => {
  const welcomeMessages = [
    'Welcome to The Cursed Blacksmith!',
    'Step into The Cursed Blacksmith!',
    'Greetings! Explore The Cursed Blacksmith!',
    'Enter The Cursed Blacksmith with a warm welcome!',
    'Discover the secrets of The Cursed Blacksmith!'
  ];

  const randomWelcome = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];

  return randomWelcome;
};

export default function Home() {
	const randomWelcome = getRandomWelcome()
	
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b pb-6 pt-8 backdrop-blur-2xl border-neutral-800 bg-zinc-800/30 from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:bg-zinc-800/30">
				{randomWelcome}
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center from-black via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            By <p className="font-bold text-lg font-mono">abcdave</p>
          </a>
        </div>
      </div>

      <Logo />
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <Link
          href='/packages'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Packages{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find the Minecraft Bedrock resource pack/behavior packs you need.
          </p>
        </Link>

        <Link
          href='/discuss'
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Discuss{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Join our forum. Let's chat, share ideas and discuss with us!
          </p>
        </Link>
      </div>
	</main>
  );
};