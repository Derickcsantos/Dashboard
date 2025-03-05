document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para os botões de visualizar relatórios
  const viewReportButtons = document.querySelectorAll(".relatorios .btn-primary")
  viewReportButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const reportTitle = this.closest(".report-card").querySelector("h3").textContent
      alert(`O relatório "${reportTitle}" será exibido em breve!`)
    })
  })

  // Funcionalidade para gerar novo relatório
  const generateReportButton = document.querySelector(".item.add-product")
  if (generateReportButton) {
    generateReportButton.addEventListener("click", () => {
      alert("Funcionalidade para gerar novo relatório será implementada em breve!")
    })
  }

  // Simulação de atualização de dados dos relatórios
  function updateReportData() {
    const reportDates = document.querySelectorAll(".relatorios .report-card p")
    reportDates.forEach((date) => {
      const newDate = new Date()
      date.textContent = `Última atualização: ${newDate.toLocaleString()}`
    })
  }

  // Atualizar dados dos relatórios a cada 5 minutos
  setInterval(updateReportData, 300000)
})

