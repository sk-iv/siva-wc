import $attributes, { initAttributes, updateAttribute } from './storeAttributes'
import { initArgsTable } from './argsTable'
//@ts-ignore
import argsTable from './argsTable.pug';
//@ts-ignore
import tableOfContent from './toc.pug';

export const story = ({ attributes, tmplRoot, title = '', toc = null }) => {
  initAttributes(attributes as any)

  const root = document.querySelector("#root")
  if (root) {
    $attributes.watch(fields => {
      root.innerHTML = `<h1>${title.replace('/', '')}</h1>${tmplRoot({ fields: fields.data })}`
    });
  }
  const aside = document.querySelector("#aside")
  if (aside && attributes) {
    $attributes.watch(data => {
      aside.innerHTML = argsTable({ data: data.data })
      initArgsTable(updateAttribute)
    })
  }
  if (aside && toc) {
    //@ts-ignore
    aside.innerHTML = tableOfContent({ data: toc })
  }
}