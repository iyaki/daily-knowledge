const args = process.env.ELEVENTY_RUN_MODE === 'build' ?
	process.argv.slice(2) :
	[
		'No solo de software vive el hombre',
		'https://iyaki.ar/posts/20240328_no_solo_de_software_vive_el_hombre/'
	]

export default function() {
	return {
		ELEVENTY_RUN_MODE: process.env.ELEVENTY_RUN_MODE,
		DATE_NOW: new Date(),
		ENTRY: {
			TITLE: args[0] ?? 'No solo de software vive el hombre',
			URI: args[1] ?? 'https://iyaki.ar/posts/20240328_no_solo_de_software_vive_el_hombre/',
		},
	}
}
