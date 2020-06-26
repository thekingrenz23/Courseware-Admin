<template>
  	<div id="app">
    	<Layout/>
  	</div>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
	name: 'app',
  	components: {
    	Layout
  	}
}
</script>

<style>
	@font-face {
		font-family: 'Lato';
		src: url('../assets/Lato-Regular.ttf')  format('truetype')
	}

	html,body{
		font-family: "Lato";
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
</style>
