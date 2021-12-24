let num = prompt("Zəhmət olmasa 5 ilə 8 arasında hər hansı bir rəqəm seçin!");

if (num != 5 && num != 6 && num != 7 && num != 8) {
  alert("Giriş uğursuzdur!");
  let again = confirm(
    "Oyuna davam etmək istəyirsinizmi? Davam etmək üçün ok, imtina etmək üçün cancel düyməsini sıxın."
  );
  if (again == false) {
    document.getElementById("show").innerHTML =
      "İmtina istəyiniz qəbul edildi.";
  } else {
    let num = prompt(
      "Zəhmət olmasa 5 ilə 8 arasında hər hansı bir rəqəm seçin!"
    );

    if (num != 5 && num != 6 && num != 7 && num != 8) {
      alert("Giriş uğursuzdur!");
      document.getElementById("show").innerHTML =
        "İmtina istəyiniz qəbul edildi.";
    } else if (num == 5 || num == 6 || num == 8) {
      document.getElementById("show").innerHTML =
        "Uğursuz seçim.. Artıq oyuna davam edə bilməyəcəksiniz...";
    } else if (num == 7) {
      document.getElementById("show").innerHTML =
        "Təbriklər... Siz qalibsiniz...";
    }
  }
} else if (num == 5 || num == 6 || num == 8) {
  document.getElementById("show").innerHTML =
    "Uğursuz seçim.. Artıq oyuna davam edə bilməyəcəksiniz...";
} else if (num == 7) {
  document.getElementById("show").innerHTML = "Təbriklər... Siz qalibsiniz... ";
}
