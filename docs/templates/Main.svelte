<script>
  import { Route, useResolve, useLocation } from "svelte-navigator";
  import attributes from "../storeAttributes";
  import Home from "../templates/Home.svelte";
  import Icon from "../components/icon/Icon.svelte";
  import Button from "../components/button/Button.svelte";
  import Radio from "../components/radio/Radio.svelte";
  import FieldText from "../components/fieldText/FieldText.svelte";
  import ColorSystem from "../foundations/color-system/ColorSystem.svelte";
  import routes from "./routes";
  const location = useLocation();
  function clearAndUpper(text) {
    return text.replace(/-/, "").toUpperCase();
  }
  const toCamelCase = (text) => {
    if (!text) return "";
    return text.replace(/-\w/g, clearAndUpper);
  };
  const getTitle = (pathname) => {
    return routes[toCamelCase(pathname)]?.label;
  };

  let title = getTitle($location.pathname.replace("/", "") || "main");
  let component;
  let componentProps;

  $: attributes.watch((a) => {
    componentProps = a.data;
  });
  $: title = getTitle($location.pathname.replace("/", "") || "main");
</script>

<h1>{title}</h1>
<slot class="main">
  <Route path="/" primary={false}>
    <svelte:component this={Home} {...componentProps} />
  </Route>
  <Route path="/icon" primary={false}>
    <svelte:component this={Icon} {...componentProps} />
  </Route>
  <Route path="/button" primary={false}>
    <svelte:component this={Button} {...componentProps} />
  </Route>
  <Route path="/radio" primary={false}>
    <svelte:component this={Radio} {...componentProps} />
  </Route>
  <Route path="/field-text" primary={false}>
    <svelte:component this={FieldText} {...componentProps} />
  </Route>
  <Route path="/color-system" primary={false}>
    <svelte:component this={ColorSystem} {...componentProps} />
  </Route>
</slot>
