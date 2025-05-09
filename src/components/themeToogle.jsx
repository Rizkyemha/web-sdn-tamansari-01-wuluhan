import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { PiSunDimFill } from "react-icons/pi";
import { BiSolidMoon } from "react-icons/bi";

export default function ThemeToogle() {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null; // ⛔ Skip render on server

	return (
		<button
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
			className='px-4 py-2 bg-accent text-white rounded-full'>
			{theme === "dark" ? <PiSunDimFill /> : <BiSolidMoon />}
		</button>
	);
}
