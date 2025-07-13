const form = document.getElementById("form");
const inputsContainer = document.getElementById("inputs");
const sortearBtn = document.getElementById("sortearBtn");
const sorteadosDiv = document.getElementById("sorteados");

const totalNomes = 17;
const nomes = [];
const sorteados = [];

// Gerar 17 campos de input
for (let i = 0; i < totalNomes; i++) {
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = `Nome ${i + 1}`;
  input.required = true;
  inputsContainer.appendChild(input);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  nomes.length = 0; // Reset
  const campos = inputsContainer.querySelectorAll("input");

  campos.forEach(input => {
    if (input.value.trim() !== "") {
      nomes.push(input.value.trim());
    }
  });

  if (nomes.length === totalNomes) {
    form.querySelector("button").disabled = true;
    inputsContainer.querySelectorAll("input").forEach(input => input.disabled = true);
    sortearBtn.disabled = false;
    alert("Nomes salvos! Agora pode sortear.");
  } else {
    alert("Por favor, preencha todos os 17 nomes.");
  }
});

sortearBtn.addEventListener("click", () => {
  if (sorteados.length >= 3) {
    alert("Já foram sorteadas 3 pessoas!");
    sortearBtn.disabled = true;
    return;
  }

  let nome;
  do {
    const index = Math.floor(Math.random() * nomes.length);
    nome = nomes[index];
  } while (sorteados.includes(nome));

  sorteados.push(nome);

  const div = document.createElement("div");
  div.className = "sorteado";
  div.innerText = `🎉 ${nome}`;
  sorteadosDiv.appendChild(div);

  if (sorteados.length === 3) {
    sortearBtn.disabled = true;
  }
});
