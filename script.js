// Status da API
document.getElementById("api-status").innerHTML = "✅ Online";

// Clima (API Open-Meteo)
async function getClima() {
  try {
    let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=-23.55&longitude=-46.63&current_weather=true");
    let data = await response.json();
    document.getElementById("temperatura").innerHTML = data.current_weather.temperature + "°C";
  } catch (error) {
    document.getElementById("temperatura").innerHTML = "❌ Erro";
  }
}

getClima();
