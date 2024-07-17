const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.getElementById("header");
console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", () => {
  header.classList.toggle("active");
});

document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.navlink > button');
  const lists = document.querySelectorAll('.navlink > div');

  buttons.forEach((button, index) => {
    button.addEventListener('click', function(event) {
      event.stopPropagation();
      lists.forEach((list, listIndex) => {
        if (index === listIndex) {
          list.style.display = list.style.display === 'block' ? 'none' : 'block';
        } else {
          list.style.display = 'none';
        }
      });
    });
  });

  document.addEventListener('click', function() {
    lists.forEach(list => {
      list.style.display = 'none';
    });
  });

  lists.forEach(list => {
    list.addEventListener('click', function(event) {
      event.stopPropagation();
    });
  });
});