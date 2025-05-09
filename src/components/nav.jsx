import Link from "next/link";

export default function Nav() {
	return (
		<nav>
			<ul className='flex gap-10 px-6 py-4 list-none justify-between'>
				<li>
					<Link
						href='/'
						className='text-surface hover:text-accent transition-colors font-medium'>
						Home
					</Link>
				</li>
				<li>
					<Link
						href='/profile'
						className='text-surface hover:text-accent transition-colors font-medium'>
						Profil Sekolah
					</Link>
				</li>
				<li>
					<Link
						href='/gallery'
						className='text-surface hover:text-accent transition-colors font-medium'>
						Galeri
					</Link>
				</li>
				<li>
					<Link
						href='/contact'
						className='text-surface hover:text-accent transition-colors font-medium'>
						Kontak
					</Link>
				</li>
			</ul>
		</nav>
	);
}
