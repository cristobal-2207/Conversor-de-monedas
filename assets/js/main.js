const inputPesos = document.getElementById("inputPesos");
const select = document.getElementById("select");
const formulario = document.getElementById("formulario");
const result = document.getElementById("result");
const graficoDOM = document.getElementById("grafico")
let grafico


const obtenerMonedas = async () => {
  try {
    const res = await fetch(`https://mindicador.cl/api/${select.value}`);
    const data = await res.json();
    if (!res.ok) {
      throw new Error("Error en la peticion");
    }
    const valorMoneda = +data.serie[0].valor;
    result.textContent = `$`+(valorMoneda * inputPesos.value).toFixed();
    return data;
  } catch (error) {
    result.textContent = error;
  }
}

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  if (inputPesos.value == 0 || select.value == "") {
    alert("Debes completar el formulario");
  } else {
    obtenerMonedas();
  }
});