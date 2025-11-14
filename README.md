Weather App

A lightweight weather application built using vanilla JavaScript.
It fetches real-time data such as temperature, wind speed, and timezone using the Open-Meteo API and displays it in a simple, mobile-friendly UI.

This project was created while learning asynchronous JavaScript and working with external APIs
Features

Uses browser geolocation to detect the user’s location
Fetches live temperature, wind speed, and timezone
Clean and minimal interface
Responsive layout (works well on phones)
Manual refresh button
Fallback to a default city if geolocation is denied
How It Works
When the app loads:
It requests the user’s location using navigator.geolocation.
If permission is granted, latitude and longitude are extracted.
Those coordinates are passed to the Open-Meteo API.

The API responds with the current weather.
The UI updates with temperature, wind speed, and timezone.
If location access is blocked, the app automatically switches to a default location (Mumbai).

Technologies Used :->
HTML
CSS
JavaScript
Open-Meteo Weather API
