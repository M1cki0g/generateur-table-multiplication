function generer() {
  let n = document.getElementById("inp").value;
  let table = document.getElementById("table");
  for (let i = 1; i <= 10; i++) {
    let res = n * i;
    // console.log(`${n}*${i}=`, res);
    table.innerHTML += Number(n) + "*" + Number(i) + "=" + Number(res) + "<br>";
  }
}
