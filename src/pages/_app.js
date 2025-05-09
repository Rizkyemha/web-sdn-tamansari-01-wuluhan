import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ThemeToogle from "@/components/themeToogle";

export default function App({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' defaultTheme='light'>
			<div className='flex flex-col min-h-screen antialiased'>
				<Header>
					<div className='w-1/3'>SDN TAMANSARI 01 KEC. WULUHAN</div>
					<div className='flex justify-end w-2/3 items-center gap-4'>
						<Nav />
						<ThemeToogle />
					</div>
				</Header>
				<Component {...pageProps} />
				<Footer />
			</div>
		</ThemeProvider>
	);
}
