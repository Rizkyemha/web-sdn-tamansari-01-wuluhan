"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ModalPreview({ selected, setSelected }) {
	const [imgSize, setImgSize] = useState({ width: 800, height: 600 });

	useEffect(() => {
		if (!selected) return;

		const img = new window.Image();
		img.src = selected;
		img.onload = () => {
			const maxWidth = window.innerWidth * 0.9;
			const maxHeight = window.innerHeight * 0.9;

			let width = img.width;
			let height = img.height;

			// resize proporsional
			const widthRatio = maxWidth / width;
			const heightRatio = maxHeight / height;
			const ratio = Math.min(widthRatio, heightRatio);

			setImgSize({
				width: width * ratio,
				height: height * ratio,
			});
		};
	}, [selected]);

	if (!selected) return null;

	return (
		<div
			className='fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4'
			onClick={() => setSelected(null)}>
			<div className='relative'>
				<Image
					src={selected}
					alt='Preview'
					width={imgSize.width}
					height={imgSize.height}
					className='rounded-lg shadow-lg object-contain'
				/>
				<button
					onClick={() => setSelected(null)}
					className='absolute top-2 right-2 bg-white rounded-full p-2 shadow-lg text-black text-xl hover:font-bold hover:cursor-pointer'
					aria-label='Close preview'>
					✕
				</button>
			</div>
		</div>
	);
}
