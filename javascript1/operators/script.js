let x = prompt("x deyerini daxil edin");

let y = prompt("y deyerini daxil daxil edin");

if (x > y) {
 let c="" ;

  c+=  `${x} - ${y}= ${x - y}<br>`; 
  c+=  `${x} / ${y}= ${x / y}<br>`;
  c+=  `${x} % ${y}= ${x % y}<br>`;

  document.getElementById("show").innerHTML = c;
} else if ( y>x){
    let z="" ;

    z+=  `${y} - ${x}= ${y-x}<br>`;
    z+=  `${y} / ${x}= ${y/x}<br>`;
    z+=  `${y} % ${x}= ${y%x}<br>`;

  document.getElementById("show").innerHTML = z;
}
 else{
    let f="" ;

    f+=  `${x} + ${y}= ${x = y}<br>`;
    f+=  `${x} * ${y}= ${x * y}<br>`;

  document.getElementById("show").innerHTML = f;
 }