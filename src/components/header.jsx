export default function Header({ children }) {
	return (
		<header className='w-full flex flex-wrap items-center justify-between py-4 px-16 sticky top-0 z-50 bg-[var(--card)]'>
			{children}
		</header>
	);
}
