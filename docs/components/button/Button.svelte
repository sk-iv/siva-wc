<script>
  export let emphasis;
  export let size;
  export let color;

  $: color;
  $: size;
  $: emphasis;
</script>

<section>
  <p>
    Кнопка – это интерактивный элемент, который активирует описанное на ней
    действие.
  </p>
  <p>
    Различие между кнопками и ссылками имеет значение:
  </p>
  <ul>
    <li>
      <mark>Cсылки</mark> используются при переходе в другое место, например: страница «просмотреть всё», страница
      профиля и т. д. 
    </li>
    <li>
      <mark>Кнопки</mark> используются при выполнении действия, например:
      «отправить», «объединить», «создать новый», «загрузить» и т. д.
    </li>
  </ul>
 

  <sv-button
    size={(size && size.value) || size?.default}
    emphasis={(emphasis && emphasis.value) || emphasis?.default}
    color={(color && color.value) || color?.default}
  >
    Кнопка
  </sv-button>

  <sv-button
    size={(size && size.value) || size?.default}
    emphasis={(emphasis && emphasis.value) || emphasis?.default}
    color={(color && color.value) || color?.default}
  >
    <sv-icon name="heart" />Кнопка с иконкой слева
  </sv-button>

  <sv-button
    size={(size && size.value) || size?.default}
    emphasis={(emphasis && emphasis.value) || emphasis?.default}
    color={(color && color.value) || color?.default}
  >
    Кнопка с иконкой справа <sv-icon name="heart" />
  </sv-button>

  <sv-button
    size={(size && size.value) || size?.default}
    emphasis={(emphasis && emphasis.value) || emphasis?.default}
    color={(color && color.value) || color?.default}
    aria-label="Кнопка иконка"
  >
    <sv-icon name="heart" />
  </sv-button>

  <section>
    <h2>Состояния</h2>
    <table id="desc">
      <tr>
        <th>Normal</th>
        <td>
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
          >
            Кнопка
          </sv-button>
        </td>
        <th>Focus</th>
        <td>
          <!-- svelte-ignore a11y-autofocus -->
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
            autofocus="true"
          >
            Кнопка
          </sv-button>
        </td>
      </tr>
      <tr>
        <th>Hover</th>
        <td>
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
          >
            Кнопка
          </sv-button>
        </td>
        <th>
          Pressed
          <span title="действие активировано">ⓘ</span>
        </th>
        <td>
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
            aria-pressed="true"
          >
            Кнопка
          </sv-button>
        </td>
      </tr>
      <tr>
        <th>Loading</th>
        <td>
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
            aria-live="polite"
            aria-busy="true"
          >
            Кнопка
          </sv-button>
        </td>
        <th>Disabled</th>
        <td>
          <sv-button
            size={(size && size.value) || size?.default}
            emphasis={(emphasis && emphasis.value) || emphasis?.default}
            color={(color && color.value) || color?.default}
            disabled
          >
            Кнопка
          </sv-button>
        </td>
      </tr>
    </table>
  </section>
</section>

<section>
  <h2>Спецификация вариантов представления</h2>
  <table id="desc">
    <tr>
      <th><em>emphasis</em></th>
      <td>
        <sv-button>primary</sv-button> |
        <sv-button emphasis="secondary">secondary</sv-button>
        <sv-button emphasis="tertiary">tertiary</sv-button>
      </td>
    </tr>
    <tr>
      <th><em>color</em></th>
      <td>
        <sv-button>main</sv-button> |
        <sv-button color="supporting">supporting</sv-button> |
        <sv-button color="accent">accent</sv-button>
      </td>
    </tr>
    <tr>
      <th><em>size</em></th>
      <td>
        <sv-button size="s">small</sv-button> |
        <sv-button>medium</sv-button> |
        <sv-button size="l">large</sv-button>
      </td>
    </tr>
  </table>
</section>
<p>
  🔗
  <a
    href="https://ux.pub/editorial/vsie-chto-vam-nuzhno-znat-o-dizainie-knopok-v-intierfieisie-o52"
  >
    Все, что вам нужно знать о дизайне кнопок в интерфейсе
  </a>
</p>
<p>
  🔗
  <a href="https://guides.kontur.ru/components/button"> Пример спецификации </a>
</p>
