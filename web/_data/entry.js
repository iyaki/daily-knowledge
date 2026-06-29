import { getRandomArticle } from "../../random-knowledge/randomArticle.js";

let title = 'No solo de software vive el hombre'
let uri = 'https://iyaki.ar/posts/20240328_no_solo_de_software_vive_el_hombre/'

async function loadData() {
	if (process.env.ELEVENTY_RUN_MODE === 'build') {
		try {
			const randomArticle = await getRandomArticle()
			title = randomArticle.properties.Name.title[0].plain_text
			uri = randomArticle.properties.URL.url
		} catch (error) {
			console.warn('Failed to fetch random article from Notion, using fallback:', error.message)
		}
	}
}

await loadData()

export default function() {
	return {
		title,
		uri,
	}
}
