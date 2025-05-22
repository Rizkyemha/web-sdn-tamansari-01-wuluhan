import Banner from "../../public/Hero_banner.jpg";
import Image from "next/image";

export default function Profile() {
	return (
		<div className='flex flex-col gap-16 pb-16'>
			<div className='bg-accent px-16 py-12'>
				<h3 className='text-5xl font-bold'>Profil Sekolah</h3>
				<p className='text-lg'>
					Discover our legacy of excellence and commitment to education
				</p>
			</div>
			<div className='flex justify-evenly'>
				<div className='flex flex-col gap-4'>
					<h3 className='text-4xl font-bold'>Karakteristik Sekolah</h3>
					<p className='max-w-2xl text-justify'>
						Satuan pendidikan ini terletak di wilayah pedesaan yang cukup
						asri, dengan alamat lengkap di Jalan Lojejer Nomor 04, Dusun
						Kebonsari, Desa Tamansari, Kecamatan Wuluhan, Kabupaten
						Jember, Provinsi Jawa Timur. Letaknya yang berada di daerah
						pedesaan memberikan suasana yang tenang dan jauh dari
						hiruk-pikuk perkotaan, sehingga mendukung terciptanya
						lingkungan belajar yang nyaman dan kondusif. Meskipun berada
						di lingkungan yang sederhana, lokasi sekolah ini mudah diakses
						oleh masyarakat sekitar karena berada di jalur yang cukup
						strategis di wilayah tersebut.
						<br />
						<br />
						Secara geografis, satuan pendidikan ini dikelilingi oleh
						beragam elemen alam dan lingkungan khas pedesaan. Di bagian
						utara dan timur, wilayah sekolah berbatasan langsung dengan
						permukiman penduduk dan area persawahan yang luas,
						mencerminkan aktivitas agraris yang menjadi mata pencaharian
						utama warga sekitar. Sementara itu, di sisi selatan, sekolah
						ini masih berbatasan dengan area permukiman penduduk yang
						cukup padat, menandakan adanya komunitas yang hidup
						berdampingan dan mendukung keberadaan lembaga pendidikan ini.
						Di bagian barat, terdapat kombinasi antara permukiman penduduk
						dan aliran sungai yang menambah kekayaan ekosistem sekitar
						serta memberikan potensi pembelajaran berbasis lingkungan bagi
						para siswa. Kombinasi antara persawahan, pemukiman, dan aliran
						sungai ini menciptakan suasana alam yang sejuk dan alami, yang
						tidak hanya mendukung proses pembelajaran, tetapi juga
						memberikan nilai edukatif terkait pemanfaatan dan
						pelestarian lingkungan.
					</p>
				</div>
				<div className='relative h-[400px] w-[400px] overflow-hidden shadow-2xl rounded-2xl'>
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
			<div className='flex flex-col gap-8'>
				<div className='bg-card space-y-8 px-16 py-12'>
					<div className='flex gap-4'>
						<p className='text-4xl'>🎯</p>
						<h3 className='text-4xl font-bold'>Visi Kami</h3>
					</div>
					<p className='text-lg'>
						Terwujudnya siswa SDN TAMANSARI 01 beriman, bertaqwa,
						berkarakter Pancasila, berwawasan Lingkungan serta Unggul
						dalam prestasi.
					</p>
				</div>
				<div className='bg-card space-y-8 px-16 py-12'>
					<div className='flex gap-4'>
						<p className='text-4xl'>🎯</p>
						<h3 className='text-4xl font-bold'>Misi Kita</h3>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='space-y-4'>
							<div>
								<p className='font-semibold'>Misi 1</p>
								<p>
									Mewujudkan peserta didik berakhlakul karimah yang
									baik melalui kegiatan keagamaan dan kegiatan sosial.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 2</p>
								<p>
									Dapat mengamalkan ajaran agama Islam hasil proses
									pembelajaran dan pembiasaan dalam kehidupan
									sehari–hari.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 3</p>
								<p>
									Mewujudkan sikap peserta didik yang mencerminkan
									karakter Pancasila dalam kehidupan berbangsa dan
									bernegara.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 4</p>
								<p>
									Menanamkan kepada peserta didik cinta dan peduli
									lingkungan sekitarnya.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 5</p>
								<p>
									Mewujudkan nilai ujian sekolah dengan jumlah
									rata-rata minimal 65.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<p className='font-semibold'>Misi 6</p>
								<p>
									Meningkatkan kualitas guru dalam mengembangkan proses
									pembelajaran dengan tidak mengabaikan nilai-nilai
									agama, karakter, dan budaya masyarakat sekitar.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 7</p>
								<p>
									Meningkatkan prestasi akademik dan non-akademik siswa
									sesuai dengan tuntutan kurikulum, bimbingan dan
									cita-cita siswa serta perkembangan IPTEK.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 8</p>
								<p>
									Merancang pembelajaran aktif, kreatif, efektif,
									menyenangkan dan mengembangkan sesuai dengan potensi
									yang dimiliki siswa.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Misi 9</p>
								<p>
									Menggali potensi siswa dan mengembangkan sesuai
									dengan potensi yang dimiliki siswa.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
						</div>
					</div>
				</div>
				<div className='bg-card space-y-8 px-16 py-12'>
					<div className='flex gap-4'>
						<p className='text-4xl'>🎯</p>
						<h3 className='text-4xl font-bold'>Tujuan Kami</h3>
					</div>
					<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
						<div className='space-y-4'>
							<div>
								<p className='font-semibold'>Tujuan 1</p>
								<p>
									Menjadi lembaga pendidikan yang menghasilkan siswa
									yang memiliki akhlak mulia dan berbudi pekerti luhur,
									melalui kegiatan keagamaan dan sosial yang terencana.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 2</p>
								<p>
									Mengajarkan dan mengamalkan ajaran agama Islam secara
									konkret dalam kehidupan sehari-hari siswa.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 3</p>
								<p>
									Membentuk sikap dan perilaku siswa yang mencerminkan
									nilai-nilai Pancasila dalam kehidupan berbangsa dan
									bernegara.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 4</p>
								<p>
									Menumbuhkan kesadaran cinta dan peduli terhadap
									lingkungan sekitar di kalangan siswa.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 5</p>
								<p>
									Mencapai nilai ujian sekolah dengan rata-rata minimal
									65 sebagai bukti pencapaian akademik yang memadai.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
						</div>

						<div className='space-y-4'>
							<div>
								<p className='font-semibold'>Tujuan 6</p>
								<p>
									Meningkatkan kualitas pengajaran dan pengembangan
									proses belajar-mengajar dengan memperhatikan
									nilai-nilai agama, karakter, dan budaya lokal.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 7</p>
								<p>
									Meningkatkan prestasi akademik dan non-akademik siswa
									sesuai dengan kurikulum yang berlaku dan mengikuti
									perkembangan ilmu pengetahuan dan teknologi.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 8</p>
								<p>
									Merancang pembelajaran yang aktif, kreatif, efektif,
									dan menyenangkan sesuai dengan potensi siswa.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
							<div>
								<p className='font-semibold'>Tujuan 9</p>
								<p>
									Mengidentifikasi dan mengembangkan potensi siswa
									secara optimal sesuai dengan kemampuan dan minat
									masing-masing.
								</p>
								<hr className='my-2 border-t border-gray-300' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
