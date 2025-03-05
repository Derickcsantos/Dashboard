document.addEventListener("DOMContentLoaded", () => {
  // Funcionalidade para salvar configurações
  const saveSettingsButtons = document.querySelectorAll(".configuracoes .btn-primary")
  saveSettingsButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const settingsCard = this.closest(".settings-card")
      const settingsTitle = settingsCard.querySelector("h3").textContent
      alert(`As configurações de "${settingsTitle}" serão salvas em breve!`)
    })
  })

  // Funcionalidade para alternar tema escuro/claro
  const themeToggler = document.querySelector(".theme-toggler")
  if (themeToggler) {
    themeToggler.addEventListener("click", function () {
      document.body.classList.toggle("dark-theme-variables")
      this.querySelector("span:nth-child(1)").classList.toggle("active")
      this.querySelector("span:nth-child(2)").classList.toggle("active")
    })
  }

  // Simulação de carregamento de configurações
  function loadSettings() {
    const inputs = document.querySelectorAll(".configuracoes input, .configuracoes select")
    inputs.forEach((input) => {
      if (input.type === "checkbox") {
        input.checked = Math.random() < 0.5
      } else if (input.type === "text" || input.tagName === "SELECT") {
        input.value = "Configuração Exemplo"
      }
    })
  }

  // Carregar configurações ao iniciar a página
  loadSettings()
})

