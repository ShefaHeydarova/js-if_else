function gameOFchange() {
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
      gameOFchange();
    }
  } else if (num == 5) {
    document.getElementById("show").innerHTML =
      "Təəssüf ki, siz ən uğursuz seçimi etdiniz.. Artıq oyuna davam edə bilməyəcəksiniz...";
  } else if (num == 6 || num == 8) {
    let again = confirm(
      "Uğursuz seçim.. Oyuna davam edərək şansınızı təkrar sınamaq istəyirsinizmi?"
    );
    if (again == false) {
      document.getElementById("show").innerHTML =
        "İmtina istəyiniz qəbul edildi.";
    } else {
      gameOFchange();
    } 
  } else if (num == 7) {
    document.getElementById("show").innerHTML =
      "Təbriklər... Siz qalibsiniz... ";
  }
}

gameOFchange();
