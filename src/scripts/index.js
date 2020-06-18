const $swapButton = document.querySelector(".theme--wrapper");
$swapButton.addEventListener("click", () => {
  const $notation = document.querySelectorAll(".swap");
  console.log($notation);
  $notation.forEach(($el) => {
    $el.classList.toggle("dark");
  });
});
