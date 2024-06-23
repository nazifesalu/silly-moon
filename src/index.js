import "./styles.css";

(function () {
  const input = document.getElementById("yazi");
  const label = document.getElementById("output");
  input.addEventListener("change", function (e) {
    label.innerHTML = e.target.value;
  });
  console.log(input);
})();
