document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para atualizar dados de análise
  function updateAnalytics() {
    // Simulação de atualização de dados
    const salesValue = Math.floor(Math.random() * 50000) + 10000
    const expensesValue = Math.floor(Math.random() * 30000) + 5000
    const incomeValue = salesValue - expensesValue

    document.querySelector(".sales h1").textContent = `R$ ${salesValue.toLocaleString("pt-BR")}`
    document.querySelector(".expenses h1").textContent = `R$ ${expensesValue.toLocaleString("pt-BR")}`
    document.querySelector(".income h1").textContent = `R$ ${incomeValue.toLocaleString("pt-BR")}`

    // Atualizar porcentagens
    document.querySelector(".sales .number p").textContent = `${Math.floor((salesValue / 50000) * 100)}%`
    document.querySelector(".expenses .number p").textContent = `${Math.floor((expensesValue / 50000) * 100)}%`
    document.querySelector(".income .number p").textContent = `${Math.floor((incomeValue / 50000) * 100)}%`
  }

  // Atualizar dados a cada 5 segundos
  setInterval(updateAnalytics, 5000)

  // Funcionalidade para adicionar relatório
  const addReportButton = document.querySelector(".item.add-product")
  if (addReportButton) {
    addReportButton.addEventListener("click", () => {
      alert("Funcionalidade para adicionar novo relatório será implementada em breve!")
    })
  }
})

