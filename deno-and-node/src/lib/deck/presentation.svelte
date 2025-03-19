<script lang="ts">
	import Slide from './slide.svelte'
	import Code from './code.svelte'
	import Markdown from './markdown.svelte'
</script>

<!-- <Slide animate>
	<Code id="code" lines>
		{`
			function love() {}
	 `}
	</Code>
</Slide>

<Slide animate>
	<Code id="code" lines="2|1-3">
		{`
			function love() {
				console.log('Svelte')
			}
	 `}
	</Code>
    <aside class="notes">
        test
    </aside>

</Slide> -->

<Slide>
	<h1>Deno + node</h1>
</Slide>

<Slide>
	<h2 class="flex-initial">Deno</h2>

	<ul>
		<li class="fragment fade-up">security model</li>
		<li class="fragment fade-up">
			!node_modules <ul><li class="fragment">"just URLs"</li></ul>
		</li>
		<li class="fragment fade-up">lately also supports NPM packages</li>
	</ul>
	<aside class="notes">file system, networking, execution of other scripts, env variables</aside>
	<aside class="notes">
		decentralized, re-export to shorten imports (don't have to type out URLs), URL versioning,
		simple is good!
	</aside>
</Slide>

<Slide>
	<h1>DEMO</h1>
	<p>deno using a package from "anywhere on the web" (github raw url)</p>
</Slide>

<Slide>
	<h1>DEMO</h1>
	<p>showing aksel repository + running deno script goes here!</p>
</Slide>

<Slide>
	<h1>DEMO</h1>
	<p>showing minimal setup repository</p>
</Slide>
