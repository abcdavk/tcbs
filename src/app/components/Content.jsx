export default function Content({children}) {
	return (
		<div className="mt-24 pb-16 w-full border border-neutral-600 rounded-xl backdrop-blur-2xl bg-neutral-500/30 p-8">
			<div className="mb-24">
				{children}
			</div>
		</div>
	)
}