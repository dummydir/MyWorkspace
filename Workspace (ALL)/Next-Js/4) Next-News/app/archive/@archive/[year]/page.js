import NewsList from "@/Components/news-list"
import {getNewsForYear} from "@/lib/news"

export default function FilteredNewsPage(params) {
	const newsYear = params.year
	const news = getNewsForYear(newsYear)
	return <NewsList news={news} />

}

