<script>
  import Observer from "./Observer.svelte";
  import {
    Router,
    Link,
    Route,
    createHistory,
    createMemorySource,
  } from "svelte-navigator";

  const memoryHistory = createHistory(createMemorySource());
  export let props;
</script>

<Router history={memoryHistory}>
  <Observer {props} />
</Router>
