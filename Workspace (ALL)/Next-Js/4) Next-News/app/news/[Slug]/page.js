import {DUMMY_NEWS} from "@/dummy-news"
import Link from "next/link"
import {notFound} from "next/navigation"

export default function NewsDetailPage({params}) {
	const newsSlug = params.Slug
	const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === newsSlug)

	if (!newsItem) {
		notFound()
	}

	return (
		<article className="news-article">
			<header>
				<img
					src={`/images/news/${newsItem.image}`}
					alt={newsItem.title}
				/>
				<h1>{newsItem.title}</h1>
				<time dateTime={newsItem.date}>{newsItem.date}</time>
			</header>
			<p>{newsItem.content}</p>
			<Link href="/news">Back To News page</Link>
		</article>
	)
}
