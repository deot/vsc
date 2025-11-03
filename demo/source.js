const btn = document.getElementById('btn')
let count = 0
/**
 * any
 * @params v ~
 */
function render(v) {
  btn.innerText = `Count: ${count} ${v}`
}
btn.addEventListener('click', () => {
  // Count from 1 to 10.
  if (count < 10) {
    count += 1
    render()
  }
})