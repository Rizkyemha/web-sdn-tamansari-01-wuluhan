export default function Header({ children }) {
	return (
		<header className='width-full flex flex-wrap items-center justify-between p-[1rem]'>
			{children}
		</header>
	);
}
