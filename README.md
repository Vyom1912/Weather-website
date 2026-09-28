# 🌦️ Weather App

Search any city to see its current weather — temperature, humidity and wind speed — with an icon matching the conditions. Data comes from the [OpenWeatherMap](https://openweathermap.org/) API.

## ✨ Features

- Search by city name (button or **Enter** key)
- Shows **temperature (°C), humidity and wind speed**
- **Weather icons** for clear, clouds, rain, drizzle, mist and snow
- "Invalid city name" message for unknown cities

## 🛠️ Built With

- HTML5
- CSS3
- JavaScript (Vanilla, Fetch API, async/await)
- [OpenWeatherMap API](https://openweathermap.org/current)
- [Font Awesome](https://fontawesome.com/)

## 📁 Project Structure

```
17 Wheather app/
├── index.html
├── style.css
├── script.js
└── image/          # Weather condition icons
```

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/vyom1912/<repository-name>.git
   ```
2. Open `index.html` in your browser — no build step or installation needed.

> Tip: For the best experience, use the **Live Server** extension in VS Code.

## 🔑 API Key

The app uses an OpenWeatherMap API key set in `script.js`. To use your own, create a free account at [openweathermap.org](https://openweathermap.org/api) and replace the `apiKey` value:

```js
const apiKey = "YOUR_API_KEY";
```

## 👤 Author

**Vyom Patel** — [GitHub @vyom1912](https://github.com/vyom1912)

If you like this project, consider giving it a ⭐ on GitHub!
