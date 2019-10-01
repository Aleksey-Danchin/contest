<template lang='pug'>
	div(v-html='result')
</template>

<script>
import hlj from 'highlight.js'
import marked from 'marked'

export default {
	props: {
		source: {
			type: String,
			required: true,
			default: ''
		}
	},

	computed: {
		result () {
			return marked(this.source || '', {
				gfm: true,
				highlight: code => hlj.highlightAuto(code).value
			})
		}
	}
}
</script>