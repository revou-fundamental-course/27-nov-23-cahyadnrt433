function hitungLuas() {
  var alas = parseFloat(document.getElementById("alas").value);
  var tinggi = parseFloat(document.getElementById("tinggi").value);

  if (!isNaN(alas) && !isNaN(tinggi)) {
    var luas = 0.5 * alas * tinggi;
    document.getElementById("luas").innerText = luas + " cm²";
  } else {
    alert("Masukkan angka valid untuk alas dan tinggi.");
  }
}

function hitungKeliling() {
  var sisiA = parseFloat(document.getElementById("sisiA").value);
  var sisiB = parseFloat(document.getElementById("sisiB").value);
  var sisiC = parseFloat(document.getElementById("sisiC").value);

  if (isValidInput(sisiA) && isValidInput(sisiB) && isValidInput(sisiC)) {
    var keliling = sisiA + sisiB + sisiC;
    document.getElementById("keliling").innerText = keliling + " cm";
  } else {
    alert("Masukkan panjang sisi yang valid");
  }
}

function isValidInput(value) {
  return !isNaN(value) && value > 0;
}

function resetLuasForm() {
  document.getElementById("alas").value = "";
  document.getElementById("tinggi").value = "";
  document.getElementById("luas").innerText = "-";
}

function resetKelilingForm() {
  document.getElementById("sisiA").value = "";
  document.getElementById("sisiB").value = "";
  document.getElementById("sisiC").value = "";
  document.getElementById("keliling").innerText = "-";
}
