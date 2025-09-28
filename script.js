// Clima dinâmico
const apiKey = "https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true";

async function getWeather() {
  try {
    const response = await fetch(apiKey);
    const data = await response.json();
    const temp = data.current_weather.temperature;
    document.getElementById("weather").innerText = `Temperatura atual: ${temp}°C 🌍`;
  } catch (error) {
    document.getElementById("weather").innerText = "Não foi possível carregar o clima.";
  }
}

getWeather();

// Simulação de envio do formulário
document.querySelector(".contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Mensagem enviada com sucesso! 🚀");
  this.reset();
});
