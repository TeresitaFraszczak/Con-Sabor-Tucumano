// Obtén una clave de API gratuita en https://openweathermap.org/
const API_KEY = "37e62ac41ad7216f68874a2cede70434";

// URL de la API de pronóstico del clima
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Tucuman&units=metric&lang=es&appid=${API_KEY}`;

// Función para obtener el pronóstico del clima
async function obtenerClima() {
  try {
    const respuesta = await fetch(apiUrl);
    const datos = await respuesta.json();

    // Extraer los datos relevantes del objeto de respuesta
    const temperatura = datos.main.temp;
    const sensacionTermica = datos.main.feels_like;
    const humedad = datos.main.humidity;
    const tiempo = datos.weather[0].description;
    const icon = datos.weather[0].icon;
    const urlIcon = ('https://openweathermap.org/img/wn/'+icon+'.png');

    // Actualizar el contenido del contenedor
    const contenedorPadre = document.querySelector("section.seccion div.seccion-principal");
    const contenedor2 = contenedorPadre.querySelector("api.box.box2");
    contenedor2.innerHTML = `
      <div class=clima2>
      <h4>Clima en Tucumán</h4>
      <img src="${urlIcon}" height='100px' alt="icono">
      <h3>${tiempo}</h3>
      <h4>Temp.: ${temperatura}°C</h4>
      <h5>S.térmica: ${sensacionTermica}°C</h5>
      <h5>Humedad: ${humedad}%</h5>
      </div>
    `;
    const contenedorPadre2 = document.querySelector("header nav div.barra");
    const contenedor3 = contenedorPadre2.querySelector("api.box.box2");
    contenedor3.innerHTML = `
      <div class=clima3 style="text align= center;">
      <h4>SM de Tucumán</h4>
      <img src="${urlIcon}" height='50px' alt="icono">
      <h5>${tiempo}</h5>
      <h5>T: ${temperatura}°C H: ${humedad}%</h5>
      </div>
    `;
  } catch (error) {
    console.error("Error al obtener el clima:", error);
  }
}

// Llamar a la función para obtener el clima al cargar la página
obtenerClima();
