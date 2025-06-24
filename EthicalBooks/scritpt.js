document.querySelectorAll('.select-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    alert(`You selected: ${btn.parentElement.querySelector('h3').innerText}`);
  });
});
