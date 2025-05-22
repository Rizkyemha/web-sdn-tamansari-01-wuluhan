import Link from "next/link";

export default function Footer() {
	return (
		<div className='px-16 py-12 bg-[var(--card)]'>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-2 max-w-[250px]'>
					<h1 className='font-bold'>About us</h1>
					<p className='text-sm text-justify'>
						SDN Tamansari 01 adalah sekolah dasar yang berkomitmen
						membentuk generasi beriman, berkarakter Pancasila, peduli
						lingkungan, dan unggul dalam prestasi melalui pembelajaran
						aktif dan menyenangkan.
					</p>
				</div>
				<div className='flex flex-col gap-2 max-w-[250px]'>
					<h1 className='font-bold'>Quick Links</h1>
					<ul className='text-sm'>
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
				</div>
				<div className='flex flex-col gap-2 max-w-[250px]'>
					<h1 className='font-bold'>Contact us</h1>
					<div className='flex flex-col gap-2'>
						<div>
							<span>icon</span>
							<span>wkwkwkwk@maho</span>
						</div>
						<div>
							<span>icon</span>
							<span>wkwkwkwk@maho</span>
						</div>
						<div>
							<span>icon</span>
							<span>wkwkwkwk@maho</span>
						</div>
					</div>
				</div>
				<div className='flex flex-col gap-2 max-w-[250px]'>
					<h1 className='font-bold'>Follow us</h1>
					<div className='flex gap-2'>
						<p>icon</p>
						<p>icon</p>
						<p>icon</p>
						<p>icon</p>
					</div>
				</div>
			</div>
		</div>
	);
}
