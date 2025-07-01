import Link from "next/link"
import Header from "../components/Header"

export default function Home() {
	console.log("executing..")
	return (
		<main>
			{/* <Header /> */}
			<img src="./icon.png" alt="a server" />
			<h1>Welcome</h1>
			<p>Lorem ipsum dolor sit amet consectetur.</p>
			<p>
				<Link href="/about">About Us</Link>
			</p>

			<p>
				<Link href="/meals">Meals</Link>
			</p>
			<p>
				<Link href="/meals/sdad">Meals D</Link>
			</p>
			<p>
				<Link href="/meals/share">Share Meals</Link>
			</p>
			<p>
				<Link href="/community">Community</Link>
			</p>
		</main>
	)
}
