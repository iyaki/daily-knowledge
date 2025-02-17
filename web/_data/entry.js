import { getRandomArticle } from "../../random-knowledge/randomArticle.js";

let title = 'No solo de software vive el hombre'
let uri = 'https://iyaki.ar/posts/20240328_no_solo_de_software_vive_el_hombre/'

if (process.env.ELEVENTY_RUN_MODE === 'build') {
	const randomArticle = await getRandomArticle()

	title = randomArticle.properties.Name.title[0].plain_text
	uri = randomArticle.properties.URL.url

	console.log(randomArticle)
}

export default function() {
	return {
		title,
		uri,
	}
}
