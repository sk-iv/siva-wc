<script>
  import Main from "./templates/Main.svelte";
  import ArgsTable from "./ArgsTable.svelte";
  import { Link, useLocation } from "svelte-navigator";
  import attributes, { initAttributes } from "./storeAttributes";
  import routes from "./templates/routes";
  import { writable } from 'svelte/store';

  const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
  const lightTheme = document.styleSheets[1]
  const darkTheme = document.styleSheets[2]
  let themeData = 'light'
  const theme = writable();

  if (darkThemeMq.matches) {
    lightTheme.disabled = true
    themeData = 'dark'
  } else {
    darkTheme.disabled = true
    themeData = 'light'
  }
  
  export let props;
  const onInput = (e) => {
    lightTheme.disabled = !lightTheme.disabled;
    darkTheme.disabled = !darkTheme.disabled;
    if(e.target.value === 'light') {
      themeData = 'dark';
    } else {
      themeData = 'light';
    }
  };
  let data;
  const location = useLocation();
  let pageProps = props[$location.pathname.replace("/", "") || "main"];

  $: theme.set(themeData);
  $: pageProps = props[$location.pathname.replace("/", "") || "main"];
  $: initAttributes(pageProps);
  $: attributes.watch((a) => {
    data = a.data;
  });
</script>

<header>
  Web Components
  <button id="theme" type="button" on:click={onInput} value={$theme}>{$theme === 'light' ? '🌞' : '🌛'}</button>
</header>
<nav>
  <ul>
    {#each Object.entries(routes) as [key, value]}
      <li>
        <Link to={value.path}>{value.label}</Link>
      </li>
    {/each}
  </ul>
</nav>
<main>
  <Main props={data} />
</main>
<aside id="aside">
  <ArgsTable props={data} />
</aside>
