document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para os botões de ler/ver mensagens
  const messageButtons = document.querySelectorAll(".mensagens .btn-primary")
  messageButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const sender = this.closest("tr").querySelector("td:first-child").textContent
      const subject = this.closest("tr").querySelector("td:nth-child(2)").textContent
      alert(`Mensagem de ${sender} sobre "${subject}" será exibida em breve!`)
    })
  })

  // Funcionalidade para nova mensagem
  const newMessageButton = document.querySelector(".item.add-product")
  if (newMessageButton) {
    newMessageButton.addEventListener("click", () => {
      alert("Funcionalidade para criar nova mensagem será implementada em breve!")
    })
  }

  // Simulação de atualização de contagem de mensagens
  function updateMessageCount() {
    const messageCount = document.querySelector(".message-count")
    if (messageCount) {
      const currentCount = Number.parseInt(messageCount.textContent)
      const newCount = currentCount + Math.floor(Math.random() * 3)
      messageCount.textContent = newCount
    }
  }

  // Atualizar contagem de mensagens a cada 30 segundos
  setInterval(updateMessageCount, 30000)
})

