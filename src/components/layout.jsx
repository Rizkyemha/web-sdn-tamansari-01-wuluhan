import Head from "next/head";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
	const title = usePathname();

	return (
		<>
			<Head>
				<title>
					{title === "/"
						? "Home"
						: title
								.replace("/", "")
								.replace(/-/g, " ")
								.replace(/\b\w/g, (char) => char.toUpperCase())}{" "}
					| SDN TAMANSARI 01 KEC. WULUHAN
				</title>
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1'
				/>
			</Head>
			{children}
		</>
	);
}
