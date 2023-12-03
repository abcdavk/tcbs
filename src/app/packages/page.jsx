"use client"

import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

import { packs } from '../lib/packs'
import { Navbar, Logo } from '../components'

import { MdOutlineFileDownload } from "react-icons/md";

export default function Packages() {
	const [downloadCounts, setDownloadCounts] = useState([]);
	
	useEffect(() => {
    const fetchData = async () => {
      const counts = await Promise.all(
        packs.map(async (pack) => {
          try {
            const response = await fetch(
              `https://api.github.com/repos/abcdavk/${pack.repo}/releases`
            );
            const releases = await response.json();

            const downloadCount = releases.reduce(
              (acc, release) =>
                acc +
                release.assets.reduce(
                  (assetCount, asset) => assetCount + asset.download_count,
                  0
                ),
              0
            );

            return {
              id: pack.id,
              downloadCount,
            };
          } catch (error) {
            console.error(
              `Error fetching download count for ${pack.name}: ${error.message}`
            );
            return {
              id: pack.id,
              downloadCount: 0,
            };
          }
        })
      );

      setDownloadCounts(counts);
    };

    fetchData();
  }, []);
	
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-24 md:p-24">
		<Navbar>Select the pack you want to install</Navbar >
		<Logo />
		<div className="mt-24 mb-32 grid text-left md:max-w-5xl md:w-full md:mb-0 md:grid-cols-2 md:gap-4 pb-24">
		  {packs.map((pack, index) => {
			  return (
				<Link
				  href={'/packages/' + pack.repo}
				  className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:border-neutral-700 hover:bg-neutral-800 hover:bg-opacity-30 md:border-gray-300 md:bg-gray-100 md:border-neutral-700 md:bg-neutral-800/30 md:hover:border-gray-100 md:hover:bg-gray-200 md:hover:border-neutral-400 md:hover:bg-neutral-500/30 flex"
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
				  <div className="">
					  <h2 className={`mb-2 text-2xl font-semibold`}>
						  {pack.name} {' '}
						<span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
						  -&gt;
						</span>
					  </h2>
						<div className="flex mb-1 text-green-500">
							<MdOutlineFileDownload className="text-lg mr-2" /><span className="text-sm">{downloadCounts[index]?.downloadCount || "Loading"} total downloads</span>
						</div>
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