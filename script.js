let clickCount = 0;

function multiplyAndLog(a, b) {
  const result = a * b;
  console.log(`Multiplying ${a} * ${b} = ${result}`);
  return result;
}

function incrementClickCount() {
  let localIncrement = 1;
  clickCount += localIncrement;
  console.log("Click Count:", clickCount);
}

function triggerBoxAnimation() {
  const box = document.getElementById('animateBox');
  box.classList.add('animate');

  setTimeout(() => box.classList.remove('animate'), 600);
}

function showModal() {
  document.getElementById("modal").classList.add("show");
}

function closeModal() {
  document.getElementById("modal").classList.remove("show");
}

document.getElementById('triggerBtn').addEventListener('click', () => {
  incrementClickCount();
  triggerBoxAnimation();
  multiplyAndLog(clickCount, 2);
});

document.getElementById('showModal').addEventListener('click', showModal);
document.getElementById('closeModal').addEventListener('click', closeModal);
