// 🔑 Substitua pela sua chave do OpenWeatherMap
const API_KEY = "SUA_CHAVE_API";
const CITY = "São Paulo"; // pode trocar para outra cidade

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=pt_br`
    );
    const data = await response.json();

    if (data.main) {
      const temp = Math.round(data.main.temp);
      const description = data.weather[0].description;
      const iconCode = data.weather[0].icon;

      document.getElementById("climaInfo").textContent =
        `Temperatura em ${CITY}: ${temp}°C, ${description}`;

      const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
      const climaIcon = document.getElementById("climaIcon");
      climaIcon.src = iconUrl;
      climaIcon.style.display = "inline";
    } else {
      document.getElementById("climaInfo").textContent = "Não foi possível carregar o clima.";
    }
  } catch (error) {
    document.getElementById("climaInfo").textContent = "Erro ao obter dados do clima.";
  }
}

getWeather();
