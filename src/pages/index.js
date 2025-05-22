import Image from "next/image";
import Banner from "../../public/Hero_banner.jpg";
import prestasi_1 from "../../public/prestasi_1.jpg";
import prestasi_2 from "../../public/prestasi_2.jpg";
import prestasi_3 from "../../public/prestasi_3.jpg";
import prestasi_4 from "../../public/prestasi_4.jpg";

import Link from "next/link";

export default function Home() {
	return (
		<div className='flex flex-col gap-16 px-16 pb-16'>
			<div className='flex flex-wrap items-center justify-evenly'>
				<div className='flex flex-col gap-8 flex-1/5'>
					<h1 className='text-4xl font-bold'>
						Bersama SDN Tamansari 01, Tumbuhkan Generasi Beriman, Cerdas,
						dan Peduli!
					</h1>
					<p className='max-w-[500px] text-justify'>
						Sekolah ramah anak yang membentuk karakter, prestasi, dan
						kepedulian sejak dini melalui pembelajaran aktif dan berbasis
						nilai keagamaan serta Pancasila.
					</p>
					<div className='flex gap-4'>
						<button className='bg-accent px-4 py-2 rounded-full shadow-2xl hover:cursor-pointer hover:font-bold'>
							Hubungi Kami
						</button>
						<button className='bg-accent-2 px-4 py-2 rounded-full shadow-2xl hover:cursor-pointer hover:font-bold'>
							<Link href='/profile'>Kenali Lebih Dekat</Link>
						</button>
					</div>
				</div>
				<div className='relative h-[550px] w-[550px] overflow-hidden shadow-2xl rounded-2xl'>
					<Image
						src={Banner}
						alt='banner'
						className='
						absolute
						object-cover
						h-full'
					/>
				</div>
			</div>
			<div className='flex justify-evenly py-16 bg-accent'>
				<div className='flex flex-col items-center'>
					<p className='font-bold text-4xl'>124</p>
					<p>Murid</p>
				</div>
				<div className='flex flex-col items-center'>
					<p className='font-bold text-4xl'>15</p>
					<p>Pendidik & Tenaga Kependidikan</p>
				</div>
				<div className='flex flex-col items-center'>
					<p className='font-bold text-4xl'>6</p>
					<p>Rombongan Belajar</p>
				</div>
				<div className='flex flex-col items-center'>
					<p className='font-bold text-4xl'>A</p>
					<p>Akreditasi</p>
				</div>
			</div>
			<div className='flex flex-wrap items-center justify-evenly py-16 gap-4'>
				<div className='flex flex-col gap-4 shadow-2xl px-6 py-6 max-w-[300px] rounded-2xl bg-[var(--card)] min-h-max'>
					<div>
						<p className='text-3xl'>🌱</p>
						<h3 className='font-bold'>
							Pancasila & Environmental Values
						</h3>
					</div>
					<p className='text-sm'>
						Membiasakan siswa bersikap sesuai nilai-nilai Pancasila dan
						cinta lingkungan melalui program pembiasaan, sosial, dan
						proyek kontekstual.
					</p>
				</div>
				<div className='flex flex-col gap-4 shadow-2xl px-6 py-6 max-w-[300px] rounded-2xl bg-[var(--card)] min-h-max'>
					<div>
						<p className='text-3xl'>🕌</p>
						<h3 className='font-bold'>Faith-Based Character Building</h3>
					</div>
					<p className='text-sm'>
						Pembelajaran dan kegiatan keagamaan untuk membentuk akhlak
						mulia serta menanamkan nilai-nilai Islam dalam kehidupan
						sehari-hari.
					</p>
				</div>
				<div className='flex flex-col gap-4 shadow-2xl px-6 py-6 max-w-[300px] rounded-2xl bg-[var(--card)] min-h-max'>
					<div>
						<p className='text-3xl'>🏅</p>
						<h3 className='font-bold'>
							Academic & Non-Academic Achievement
						</h3>
					</div>
					<p className='text-sm'>
						Mendukung potensi siswa lewat pembelajaran aktif dan
						menyenangkan, demi meraih prestasi di bidang akademik maupun
						non-akademik.
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-8 items-center'>
				<h1 className='text-2xl font-bold'>Prestasi Terbaru</h1>
				<div className='flex flex-wrap justify-center gap-4 lg:justify-normal lg:flex-nowrap'>
					<div className='flex flex-col gap-4 shadow-2xl rounded-2xl'>
						<div className='relative overflow-hidden h-[250px] rounded-t-2xl'>
							<Image
								className='absolute h-full object-center object-cover'
								src={prestasi_1}
								alt='prestasi_1'
							/>
						</div>
						<div className='p-4'>
							<p className='text-[12px] text-accent'>19 Februari 2025</p>
							<h3 className='font-bold'>Harapan 3 | Pantomim</h3>
							<p className='text-sm'>
								Festival dan lomba seni siswa nasional jenjang SD Kec.
								Wuluhan.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 shadow-2xl rounded-2xl'>
						<div className='relative overflow-hidden h-[250px] rounded-t-2xl'>
							<Image
								className='absolute h-full object-center object-cover'
								src={prestasi_2}
								alt='prestasi_2'
							/>
						</div>
						<div className='p-4'>
							<p className='text-[12px] text-accent'>19 Februari 2025</p>
							<h3 className='font-bold'>Harapan 2 | Menyanyi Solo</h3>
							<p className='text-sm'>
								Festival dan lomba seni siswa nasional jenjang SD Kec.
								Wuluhan.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 shadow-2xl rounded-2xl'>
						<div className='relative overflow-hidden h-[250px] rounded-t-2xl'>
							<Image
								className='absolute h-full object-center object-cover'
								src={prestasi_3}
								alt='prestasi_3'
							/>
						</div>
						<div className='p-4'>
							<p className='text-[12px] text-accent'>19 Februari 2025</p>
							<h3 className='font-bold'>Harapan 3 | Nasyid</h3>
							<p className='text-sm'>
								Festival dan lomba seni siswa nasional jenjang SD Kec.
								Wuluhan.
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-4 shadow-2xl rounded-2xl'>
						<div className='relative overflow-hidden h-[250px] rounded-t-2xl'>
							<Image
								className='absolute h-full object-center object-cover'
								src={prestasi_4}
								alt='prestasi_4'
							/>
						</div>
						<div className='p-4'>
							<p className='text-[12px] text-accent'>19 Februari 2025</p>
							<h3 className='font-bold'>Juara 3 | Menari</h3>
							<p className='text-sm'>
								Festival dan lomba seni siswa nasional jenjang SD Kec.
								Wuluhan.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-4 items-center py-8'>
				<h2 className='text-2xl font-bold'>
					Siap Jadi Bagian dari Keluarga Besar SDN Tamansari 01 ?
				</h2>
				<p className='text-sm'>
					Mulailah langkah awal untuk memberikan pendidikan berkarakter,
					berprestasi, dan penuh nilai kehidupan bagi buah hati Anda.
				</p>
				<div className='flex gap-8'>
					<button className='px-4 py-2 bg-accent rounded-full shadow-2xl cursor-pointer hover:font-bold'>
						Daftar Sekarang
					</button>
					<button className='px-4 py-2 bg-accent-2 rounded-full shadow-2xl cursor-pointer hover:font-bold'>
						Jadwal Kunjungan
					</button>
				</div>
			</div>
		</div>
	);
}
