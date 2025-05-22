import { ThemeProvider } from "next-themes";
import "@/styles/globals.css";
import Header from "@/components/header";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ThemeToogle from "@/components/themeToogle";
import Logo from "../../public/logo_fix_2.png";
import Image from "next/image";
import Layout from "@/components/layout";

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<ThemeProvider attribute='class' defaultTheme='light'>
				<div className='flex flex-col min-h-screen justify-between antialiased'>
					<Header>
						<div className='w-1/3 flex items-center flex-nowrap gap-3'>
							<Image src={Logo} alt='logo' width={50} height={50} />
							<h2 className='font-bold'>
								SDN TAMANSARI 01 KEC. WULUHAN
							</h2>
						</div>
						<div className='flex justify-end w-2/3 items-center gap-4'>
							<Nav />
							<ThemeToogle />
						</div>
					</Header>
					<Component {...pageProps} />
					<Footer />
				</div>
			</ThemeProvider>
		</Layout>
	);
}
