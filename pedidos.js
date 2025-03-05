document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para os botões de detalhes
  const detailButtons = document.querySelectorAll(".pedidos .btn-primary")
  detailButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const orderId = this.closest("tr").querySelector("td:first-child").textContent
      alert(`Detalhes do pedido ${orderId} serão exibidos em breve!`)
    })
  })

  // Funcionalidade para adicionar pedido
  const addOrderButton = document.querySelector(".item.add-product")
  if (addOrderButton) {
    addOrderButton.addEventListener("click", () => {
      alert("Funcionalidade para adicionar novo pedido será implementada em breve!")
    })
  }
})

