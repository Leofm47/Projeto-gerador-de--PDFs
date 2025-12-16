function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // ===============================
  // CONTEÚDOS DAS CAPACITAÇÕES
  // ===============================
  const textos = {

    nivel1:
`CONTEÚDO PROGRAMÁTICO – CAPACITAÇÃO NÍVEL 1 (SOLIDWORKS)

Introdução
• Tipos de arquivos
• Intenção de projeto
• Interface do SolidWorks

Esboço 2D
• Criação de esboços 2D
• Regras que governam os esboços
• Aplicação de dimensões

Modelagem Básica
• Extrusão
• Corte
• Filetes e arredondamentos
• Planos
• Recursos de revolução
• Padrões de repetição linear e circular

Visualização e Detalhamento
• Vistas padrão
• Opções de visualização
• Detalhamento de desenhos técnicos:
  – Vistas de desenho
  – Vistas de detalhe
  – Vistas projetadas
  – Vistas de seção
  – Marcas e linhas de centro
  – Dimensões
  – Templates e formatos de folha
  – Vistas de desenho de montagem
  – Lista de materiais e tabelas
  – Balões

Montagens
• Projetos ascendentes de montagem
• Inserção de peças na montagem
• Posicionamentos:
  – Coincidente
  – Tangente
  – Paralelo
  – Simetria
  – Largura
• Utilização de montagens

Manutenção do Projeto
• Reparos
• Alterações no projeto

Observação
Para adequar o horário da capacitação às suas necessidades, a SKA oferece diferentes opções de turnos para sua realização.
Em função de valores diferenciados, consulte a Cláusula Investimento – Serviços.
`,

    nivel2:
`
CONTEÚDO PROGRAMÁTICO – CAPACITAÇÃO NÍVEL 2 (SOLIDWORKS)

OBJETIVO
Capacitar o participante a utilizar o SolidWorks para modelagem de peças, montagens e chapas, com enfoque em geometrias complexas.

PRÉ-REQUISITOS
Capacitação no curso SolidWorks Nível I ou conhecimento de trabalho com o sistema CAD SolidWorks.

CARGA HORÁRIA
40 horas.

CONTEÚDO PROGRAMÁTICO

Configurações e Recursos Avançados
• Configurações de peças
• Configurações de conjuntos
• Configurações em detalhamentos
• Inserção de peças em peças

Recursos de Modelagem Avançada
• Sweep
• Loft
• Shell
• Rib
• COSMOSXpress

Superfícies
• Superfície extrudada
• Superfície plana
• Aparar superfície
• Costurar superfície
• Trabalhar com imagens
• Superfície por revolução
• Superfície varrida
• Modelagem híbrida

Grandes Montagens
• Componentes de peso leve
• Modo de grande montagem
• Abertura seletiva
• Uso de configurações em grandes montagens
• Dicas para montagens mais rápidas
• Considerações sobre desenhos

Posicionamentos Mecânicos
• Came
• Dobradiça
• Engrenagem
• Pinhão e cremalheira
• Parafuso
• Junta universal

Sheet Metal (Chapas Metálicas)
• Métodos de chapa metálica
• Calibres de chapa metálica
• Flanges
• Recursos de chapa metálica
• Flange contínuo
• Flange de aresta
`,

    nivel3:
`CONTEÚDO PROGRAMÁTICO – CAPACITAÇÃO NÍVEL 3 (SOLIDWORKS)
OBJETIVO
Capacitar o participante a utilizar as principais ferramentas do software SolidWorks para trabalhos com superfícies e criação de moldes, utilizando técnicas automáticas e manuais.

PRÉ-REQUISITOS
Conhecimento dos recursos de modelagem avançada do SolidWorks, como Lofts e Sweeps.

CARGA HORÁRIA
28 horas.

CONTEÚDO PROGRAMÁTICO

Fundamentos de Superfícies
• Sólidos e superfícies
• Introdução à superfície extrudada
• Introdução à superfície plana
• Aparar superfície
• Introdução à costura de superfícies
• Fluxo de trabalho com superfícies
• Trabalhar com imagens
• Similaridades entre modelagem de sólidos e superfícies
• Introdução à superfície por revolução
• Introdução à superfície varrida
• Modelagem híbrida

Preparação para Moldes
• Importação de arquivos
• Análise dos ângulos de extração
• Fator de escala
• Linhas de partição
• Superfícies de partição

Criação de Moldes
• Criação de moldes
• Conserto de modelos e superfícies
• Múltiplas direções de partição
• Métodos alternativos para desenho de moldes

Observação
Para adequar o horário da capacitação às suas necessidades, a SKA oferece diferentes opções de turnos para sua realização.
Em função de valores diferenciados, consulte a Cláusula Investimento – Serviços.
`
  };

  // ===============================
  // CABEÇALHO
  // ===============================
  doc.setFontSize(16);
  doc.text("Relatório de Capacitações – SolidWorks", 10, 20);
  doc.setFontSize(12);
  doc.line(10, 25, 200, 25);

  let y = 35;

  // ===============================
  // GERA CONTEÚDO CONFORME CHECKBOX
  // ===============================
  document
    .querySelectorAll('input[type="checkbox"]:checked')
    .forEach((checkbox, index) => {

      const texto = textos[checkbox.value];
      if (!texto) return;

      if (index > 0) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(11);
      doc.text(texto, 10, y, { maxWidth: 180 });
    });

  doc.save("capacitações_solidworks.pdf");
}
