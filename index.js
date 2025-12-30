function formatarNome(nome) {
  return nome
    .toLowerCase()
    .split(" ")
    .filter(p => p)
    .map(p => p[0].toUpperCase() + p.slice(1))
    .join(" ");
}

const cursosPorProduto = {
  hexagon: [
    "Habilitação Atualização EDGECAM Advanced Milling / Turning",
    "Habilitação Atualização EDGECAM Standard Milling / Turning",
    "Habilitação Atualização EDGECAM Ultimate Milling / Turning",
    "Habilitação Customizável em EDGECAM",
    "Habilitação EDGECAM 4 Axis Simultaneous",
    "Habilitação EDGECAM 5 Axis Simultaneous",
    "Habilitação EDGECAM 5 Axis Simultaneous -  Ultimate Module",
    "Habilitação EDGECAM 5 Axis Simultaneous - Advanced Module",
    "Habilitação EDGECAM Advanced Milling",
    "Habilitação EDGECAM Básico",
    "Habilitação EDGECAM Educacional Atualização",
    "Habilitação EDGECAM Educacional Fresamento",
    "Habilitação EDGECAM Educacional Fresamento Avançado",
    "Habilitação EDGECAM Educacional Fresamento Simultâneo",
    "Habilitação EDGECAM Educacional Torneamento",
    "Habilitação EDGECAM Educacional Torneamento e Fresamento",
    "Habilitação EDGECAM Essential Milling",
    "Habilitação EDGECAM Essential Turning",
    "Habilitação EDGECAM Fresamento de 3 eixos simultâneos",
    "Habilitação EDGECAM Fresamento Prismático 2 1/2 Eixos",
    "Habilitação EDGECAM Inspection",
    "Habilitação EDGECAM para Fresamento contínuo com 4 eixos simultâneos",
    "Habilitação EDGECAM Probing",
    "Habilitação EDGECAM Standard Milling",
    "Habilitação EDGECAM Standard Turning (C & Y)",
    "Habilitação EDGECAM Strategy Manager",
    "Habilitação EDGECAM Torneamento Básico",
    "Habilitação EDGECAM Torneamento Completo",
    "Habilitação EDGECAM Ultimate Milling",
    "Habilitação EDGECAM Ultimate Turning (B Axis)",
    "Habilitação EDGECAM Wire EDM 5 Eixos",
    "Habilitação Torneamento Advanced Turning (2 Torres)",
    "Habilitação Torneamento Advanced Turning (Geral)",
    "Habilitação Torneamento Advanced Turning (Sub Spindle)"

  ],

  alphacam: [
    "Habilitação ALPHACAM Aspire",
    "Habilitação ALPHACAM Automation Manager",
    "Habilitação ALPHACAM Router Advanced",
    "Habilitação ALPHACAM Router Advanced Five Axis",
    "Habilitação ALPHACAM Router Essential",
    "Habilitação ALPHACAM Router Standard",
    "Habilitação ALPHACAM Router Ultimate",
    "Habilitação Customizável em ALPHACAM"
  ],

  lantek: [
    "Habilitação em Lantek Customizável",
    "Habilitação Lantek Bend",
    "Habilitação Lantek Expert Cut",
    "Habilitação Lantek Expert Cut Plus",
    "Habilitação Lantek Expert Cut Plus Fab",
    "Habilitação Lantek Expert Duct",
    "Habilitação Lantek Expert Gold",
    "Habilitação Lantek Expert Punch",
    "Habilitação Lantek Expert Punch Plus",
    "Habilitação Lantek Flex3D Tubes/Perfis",
    "Habilitação LANTEK INTEGRA CRM Quotes",
    "Habilitação LANTEK INTEGRA Outsourcing Management",
    "Habilitação LANTEK INTEGRA Outsourcing Purchasing",
    "Habilitação Lantek Integra Reports Toolkit",
    "Habilitação Lantek Manager",
    "Habilitação LANTEK MES Inventory",
    "Habilitação Lantek Sharp",
    "Habilitação Lantek Sharp Fab",
    "Habilitação Lantek WOS",
    "Habilitação Upgrade Lantek Expert Cut Plus",
    "Habilitação Upgrade Lantek Expert Gold",
    "Habilitação Upgrade Lantek Expert Punch Plus",
    "Habilitação Upgrade Lantek Expert Silver"

  ],
  
  worknc: [
    "Habilitação Atualização de Versão WORKNC",
    "Habilitação Customizável em WORKNC",
    "Habilitação WORKNC 2D",
    "Habilitação WORKNC 5 Eixos Simultâneos",
    "Habilitação WORKNC Advanced",
    "Habilitação WORKNC Basic",
    "Habilitação WORKNC Educacional 5 Eixos Simultâneos",
    "Habilitação WORKNC Educacional Full License",
    "Habilitação WORKNC Full",
    "Habilitação WORKNC Gerenciamento de Features (Furos)",
    "Habilitação WORKNC Positional (4/5 Eixos indexados)"
  ],

  solidworks: [
    "Habilitação em DraftSight",
    "Habilitação em DriveWorks Pro Nivel I",
    "Habilitação em DriveWorks Pro Nivel II",
    "Habilitação em DriveWorks Solo",
    "Habilitação em DriveWorks Xpress",
    "Habilitação em Power Surfacing",
    "Habilitação em Power Surfacing RE",
    "Habilitação em SKA CONNECTOR",
    "Habilitação em SOLIDWORKS Chapas Metálicas e Soldagens",
    "Habilitação em SOLIDWORKS Customizável",
    "Habilitação em SOLIDWORKS Flow Simulation",
    "Habilitação em SOLIDWORKS Flow Simulation Eletronic Cooling",
    "Habilitação em SOLIDWORKS Flow Simulation HVAC",
    "Habilitação em SOLIDWORKS Inspection",
    "Habilitação em SOLIDWORKS MBD",
    "Habilitação em SOLIDWORKS Motion",
    "Habilitação em SOLIDWORKS Nível I",
    "Habilitação em SOLIDWORKS Nível II",
    "Habilitação em SOLIDWORKS Nível III",
    "Habilitação em SOLIDWORKS Plastics Premium",
    "Habilitação em SOLIDWORKS Plastics Professional",
    "Habilitação em SOLIDWORKS Plastics Standard",
    "Habilitação em SOLIDWORKS Routing Electrical",
    "Habilitação em SOLIDWORKS Routing Piping and Tubing",
    "Habilitação em SOLIDWORKS Simulation",
    "Habilitação em SOLIDWORKS Simulation Premium",
    "Habilitação em SOLIDWORKS Simulation Professional",
    "Habilitação em SOLIDWORKS Visualize Professional",
    "Habilitação em SOLIDWORKS Visualize Standard",
    "Habilitação SOLIDWORKS CAM Professional Milling",
    "Habilitação SOLIDWORKS CAM Professional Turning",
    "Habilitação SOLIDWORKS CAM STANDARD",
    "Habilitação SOLIDWORKS Composer Essentials",
    "Habilitação SOLIDWORKS PDM PROFESSIONAL - Administração",
    "Habilitação SOLIDWORKS PDM PROFESSIONAL - Usuários",
    "Habilitação SOLIDWORKS PDM STANDARD - Administração",
    "Habilitação SOLIDWORKS PDM STANDARD - Usuários",
  ]
};

document.querySelectorAll('input[name="bg"]').forEach(radio => {
  radio.addEventListener("change", () => {
    const produto = radio.value;

    // troca fundo
    const bgImg = document.getElementById("bg-certificado");
    bgImg.src =
      produto === "hexagon"
        ? "assets/certificado_hexagon.png"
        : produto === "lantek"
        ? "assets/certificado_lantek.png"
        : "assets/certificado_solidworks.png";

    // atualiza cursos
    atualizarCursos(produto);
  });
});


function atualizarCursos(produto) {
  const datalist = document.getElementById("lista-cursos");
  const inputTitulo = document.getElementById("titulo");

  datalist.innerHTML = "";
  inputTitulo.value = "";

  cursosPorProduto[produto].forEach(curso => {
    const option = document.createElement("option");
    option.value = curso;
    datalist.appendChild(option);
  });
}





async function gerarPDF() {
  let nome = document.getElementById("nome").value;
  const titulo = document.getElementById("titulo").value;
  const horas = document.getElementById("horas").value;
  const data = document.getElementById("data").value;

  if (!nome || !titulo || !horas || !data) {
    alert("Preencha todos os campos");
    return;
  }

  // Nome formatado
  nome = formatarNome(nome);

  // fundo escolhido
  const bgSelecionado = document.querySelector('input[name="bg"]:checked').value;
  const bgImg = document.getElementById("bg-certificado");

  bgImg.src =
    bgSelecionado === "hexagon"
      ? "assets/certificado_hexagon.png"
      : "assets/certificado_lantek.png";

  document.getElementById("cert-nome").innerText = nome;
  document.getElementById("cert-titulo").innerText = titulo;
  document.getElementById("cert-horas").innerText = horas;

  const dataFormatada = new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });

  document.getElementById("cert-data").innerText =
    `São Leopoldo, ${dataFormatada}`;

  const certificado = document.getElementById("certificado");

  const canvas = await html2canvas(certificado, {
    scale: 2,
    useCORS: true
  });

  const imgData = canvas.toDataURL("image/png");

  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF("p", "mm", "a4");

  pdf.addImage(imgData, "PNG", 0, 0, 210, 297);
  pdf.save("certificado.pdf");
}

atualizarCursos("hexagon");