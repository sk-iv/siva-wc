<script>
  import Main from "./templates/Main.svelte";
  import ArgsTable from "./ArgsTable.svelte";
  import { Link, useLocation } from "svelte-navigator";
  import attributes, { initAttributes } from "./storeAttributes";
  import routes from "./templates/routes";

  export let props;
  let data;
  const location = useLocation();
  let pageProps = props[$location.pathname.replace("/", "") || "main"];
  $: pageProps = props[$location.pathname.replace("/", "") || "main"];
  $: initAttributes(pageProps);
  $: attributes.watch((a) => {
    data = a.data;
  });
</script>

<header>Web Components</header>
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
