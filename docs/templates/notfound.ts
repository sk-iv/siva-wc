//@ts-ignore
import templateNotFound from './notfound.pug';

function notfound() {
  const root = document.querySelector('#root')
  if (root) {
    root.innerHTML = templateNotFound();
  }
}
export default notfound;
