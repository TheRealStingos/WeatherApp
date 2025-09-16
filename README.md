# Stingos' Weather App

A modern, responsive weather forecasting application that provides detailed weather information for any city worldwide. Built with vanilla JavaScript and featuring a clean, glassmorphic design.

## ✨ Features

- **Multi-day Forecasts**: Get weather predictions for 3, 5, 7, 10, or 15 days
- **Temperature Units**: Toggle between Fahrenheit (°F) and Celsius (°C)
- **Real-time Data**: Powered by Visual Crossing Weather API
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Beautiful glassmorphic design with smooth animations
- **Error Handling**: Graceful error messages for invalid locations or network issues
- **Loading States**: Visual feedback during data fetching

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **API**: Visual Crossing Weather Services
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Module System**: ES6 Modules
- **Design**: Glassmorphism, Gradient backgrounds, Box shadows

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A Visual Crossing Weather API key (free tier available)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-app.git
   cd weather-app
   ```

2. **Set up the API key**
   - Sign up for a free account at [Visual Crossing Weather](https://www.visualcrossing.com/weather-api)
   - Replace the API key in `src/modules/forecast.js`:
   ```javascript
   const key = "&key=YOUR_API_KEY_HERE&contentType=json";
   ```

3. **Serve the application**
   
   Since the app uses ES6 modules, you need to serve it through a web server. You can use:
   
   **Option A: Using Python (if installed)**
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   **Option B: Using Node.js (if installed)**
   ```bash
   npx http-server
   ```
   
   **Option C: Using Live Server (VS Code Extension)**
   - Install the Live Server extension in VS Code
   - Right-click on `template.html` and select "Open with Live Server"

4. **Open in browser**
   - Navigate to `http://localhost:8000/src/template.html`

## 📱 Usage

1. **Enter a Location**: Type any city name or location in the search box
2. **Choose Temperature Unit**: Select between Fahrenheit (°F) or Celsius (°C)
3. **Select Forecast Length**: Choose how many days ahead you want to see (3-15 days)
4. **Get Weather**: Click the "Get Weather" button to fetch the forecast
5. **View Results**: Scroll through the weather cards to see daily forecasts

### Example Locations

- New York, NY
- London, UK
- Tokyo, Japan
- Sydney, Australia
- Paris, France

## 🏗️ Project Structure

```
weather-app/
├── src/
│   ├── index.js           # Main application logic
│   ├── template.html      # HTML template
│   ├── styles.css         # Styling and responsive design
│   └── modules/
│       └── forecast.js    # Weather API integration
└── README.md
```

### File Descriptions

- **`index.js`**: Main entry point, handles user interactions and form submission
- **`template.html`**: HTML structure with semantic markup and accessibility features
- **`styles.css`**: Modern CSS with glassmorphism design, responsive layout, and animations
- **`forecast.js`**: API integration module for fetching weather data from Visual Crossing

## 🎨 Design Features

- **Glassmorphism**: Semi-transparent elements with backdrop blur effects
- **Gradient Backgrounds**: Beautiful color transitions
- **Responsive Cards**: Weather information displayed in clean, card-based layout
- **Hover Effects**: Interactive elements with smooth transitions
- **Mobile-First**: Optimized for mobile devices with touch-friendly interfaces

## 🔧 API Integration

The app uses the Visual Crossing Weather API with the following features:

- **Endpoint**: Timeline Weather API
- **Data Format**: JSON
- **CORS Enabled**: Cross-origin requests supported
- **Unit Groups**: Both US (Imperial) and Metric systems
- **Forecast Range**: Up to 15 days

### API Response Data Used

- Daily temperature
- Weather conditions
- Humidity percentage
- Date information

## 📱 Responsive Design

The app is fully responsive and adapts to different screen sizes:

- **Desktop (1200px+)**: Full layout with large cards
- **Tablet (768px-1199px)**: Adjusted spacing and card sizes
- **Mobile (<768px)**: Stacked layout with optimized touch targets

## 🐛 Error Handling

The app handles various error scenarios:

- **Network Errors**: Connection issues or API downtime
- **Invalid Locations**: Cities that don't exist or typos
- **Empty Input**: Prompts user to enter a location
- **API Errors**: HTTP status code errors

## 🙏 Acknowledgments

- [Visual Crossing Weather](https://www.visualcrossing.com/) for providing the weather API
