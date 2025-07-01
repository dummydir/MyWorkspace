import MealsGrid from "@/components/meals/meals-grid"
import classes from "./page.module.css"
import Link from "next/link"
import {getMeals} from "@/lib/meals"
import {Suspense} from "react"

async function Meals() {
	const meals = await getMeals()
	return <MealsGrid meals={meals} />
}

export default function MealsPage() {
	return (
		<>
			<header className={classes.header}>
				<h1>
					Delicious Meals , Created{" "}
					<span className={classes.highlight}>By you</span>
				</h1>
				<p>
					Choose Your favorite recipe and cook it yourself. it is easy
					and fun
				</p>
				<p className={classes.cta}>
					<Link href="/meals/share">Share Your Favorite Recipe</Link>
				</p>
			</header>
			<main className={classes.main}>
				<Suspense
					fallback={
						<h2 className={classes.loading}>Fetching meals</h2>
					}>
					<Meals />
				</Suspense>
			</main>
		</>
	)
}
