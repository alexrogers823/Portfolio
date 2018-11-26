const pythonContent = document.querySelector('[data-python]');
const jsContent = document.querySelector('[data-js]');
const buttons = document.querySelectorAll('button');

function switchClassSelected(e) {
  const otherButton = document.querySelector('.selected');
  otherButton.classList.remove('selected');
  e.target.classList.add('selected');
  return otherButton.textContent.toLowerCase();
}

function switchContent(e) {
  const otherText = switchClassSelected(e);
  const unselected = document.querySelector(`[data-${otherText}]`);
  const selected = document.querySelector(`[data-${e.target.textContent.toLowerCase()}]`);
  unselected.style.display = 'none';
  selected.style.display = 'block';

}

buttons.forEach(button => button.addEventListener('click', switchContent));
