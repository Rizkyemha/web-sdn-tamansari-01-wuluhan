import Image from "next/image";
import { useState } from "react";
import ModalPreview from "../components/modelPreview";

export default function Gallery() {
	const totalImages = 12;
	const images = Array.from(
		{ length: totalImages },
		(_, i) => `/galery/galery_${i + 1}.jpg`
	);
	const [selected, setSelected] = useState(null);

	return (
		<div className='pb-16 space-y-8'>
			<div className='bg-accent px-16 py-12'>
				<h3 className='text-5xl font-bold'>Galeri Sekolah</h3>
				<p className='text-lg'>
					Discover our legacy of excellence and commitment to education
				</p>
			</div>
			<div className='px-6 md:px-16 columns-2 md:columns-3 lg:columns-4 space-y-4'>
				{images.map((src, idx) => (
					<div
						key={idx}
						className='break-inside-avoid rounded-lg overflow-hidden cursor-pointer'
						onClick={() => setSelected(src)}>
						<Image
							src={src}
							alt={`Foto Kegiatan ${idx + 1}`}
							width={400}
							height={400}
							sizes='(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw'
							className='w-full h-auto object-cover rounded-lg hover:scale-105 transition-transform duration-300'
						/>
					</div>
				))}
			</div>
			{selected && (
				<ModalPreview selected={selected} setSelected={setSelected} />
			)}
		</div>
	);
}
