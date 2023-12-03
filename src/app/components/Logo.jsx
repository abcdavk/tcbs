import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
	return (
		<div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:blur-2xl  after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-red-600 after:via-red-900 after:blur-2xl after:content-[''] before:lg:h-[360px] z-[-1]">
			<Link
				href="/"
			>
				<Image
					className="relative opacity-90 backdrop-blur-2xl"
					src="/tcbs.png"
					alt="TCBS Logo"
					width={180}
					height={180}
					priority
				/>
			</Link>
		</div>
	)
}