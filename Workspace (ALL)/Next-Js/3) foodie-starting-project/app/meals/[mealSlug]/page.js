import classes from "./page.module.css"
import Image from "next/image"
import {getMeal} from "@/lib/meals"
import {notFound} from "next/navigation"

export default function MealSlug({params}) {
	const meal = getMeal(params.mealSlug)

	if (!meal) {
		notFound()
	}
	meal.instructions = meal.instructions.replace(/\n/g, "<br/>")

	return (
		<>
			<header className={classes.header}>
				<div className={classes.image}>
					<Image fill />
				</div>
				<div className={classes.headerText}>
					<h1>{meal.title}</h1>
					<p className={classes.creator}>
						by {/* <a href={`mailto:${email}`}>Name</a> */}
					</p>
					<p className={classes.summary}>Summary</p>
				</div>
			</header>
			<main>
				<p
					className={classes.instructions}
					dangerouslySetInnerHTML={{
						__html: "...",
					}}></p>
			</main>
		</>
	)
}
