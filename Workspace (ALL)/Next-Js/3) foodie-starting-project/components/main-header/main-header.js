import Link from "next/link"
import Image from "next/image"

import logoImg from "@/assets/logo.png"
import classes from "./main-header.module.css"
import MainHeaderBackground from "./main-header-background"
import NavLink from "./nav-link"
// import {usePathname} from "next/navigation"
/* this hook give you the current active path */

export default function MainHeader() {
	// console.log("executing")
	return (
		<>
			<MainHeaderBackground />
			<header className={classes.header}>
				<Link className={classes.logo} href="/">
					<Image src={logoImg} alt="a plate with the food" priority />
					Next Level Food
				</Link>
				<nav className={classes.nav}>
					<ul>
						<li>
							<NavLink href="/meals">Browse meals</NavLink>
						</li>
						<li>
							<NavLink href="/community">
								Foodies Community{" "}
							</NavLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}
