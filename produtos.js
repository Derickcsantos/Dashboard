document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para os botões de editar produtos
  const editButtons = document.querySelectorAll(".produtos .btn-primary")
  editButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const productName = this.closest("tr").querySelector("td:first-child").textContent
      alert(`Edição do produto "${productName}" será implementada em breve!`)
    })
  })

  // Funcionalidade para adicionar produto
  const addProductButton = document.querySelector(".item.add-product")
  if (addProductButton) {
    addProductButton.addEventListener("click", () => {
      alert("Funcionalidade para adicionar novo produto será implementada em breve!")
    })
  }

  // Simulação de atualização de estoque
  function updateStock() {
    const stockCells = document.querySelectorAll(".produtos table td:nth-child(5)")
    stockCells.forEach((cell) => {
      let currentStock = Number.parseInt(cell.textContent)
      currentStock += Math.floor(Math.random() * 5) - 2 // Altera o estoque em -2 a +2
      currentStock = Math.max(0, currentStock) // Garante que o estoque não seja negativo
      cell.textContent = currentStock

      // Atualiza o status baseado no novo estoque
      const statusCell = cell.nextElementSibling
      if (currentStock === 0) {
        statusCell.textContent = "Fora de Estoque"
        statusCell.className = "danger"
      } else if (currentStock <= 5) {
        statusCell.textContent = "Baixo Estoque"
        statusCell.className = "warning"
      } else {
        statusCell.textContent = "Disponível"
        statusCell.className = "success"
      }
    })
  }

  // Atualizar estoque a cada 1 minuto
  setInterval(updateStock, 60000)
})

