"use strict";

const button = document.getElementById("load-quakes-btn");
const container = document.getElementById("quake-container");

function checkStatus(response) {
  if (!response.ok) {
    throw new Error(`${response.status}: ${response.statusText}`);
  }
  return response.json();
}

function formatTime(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString("ko-KR", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit", second: "2-digit"
  });
}

function createQuakeCard(quake) {
  const card = document.createElement("div");
  card.className = "quake-card";

  const mag = document.createElement("h3");
  mag.textContent = `진도: ${quake.properties.mag}`;

  const place = document.createElement("p");
  place.textContent = `📍 ${quake.properties.place}`;

  const time = document.createElement("p");
  time.textContent = `🕒 ${formatTime(quake.properties.time)}`;

  const link = document.createElement("a");
  link.href = quake.properties.url;
  link.target = "_blank";
  link.textContent = "🔗 상세 보기";

  card.appendChild(mag);
  card.appendChild(place);
  card.appendChild(time);
  card.appendChild(link);

  card.classList.add(getMagnitudeClass(quake.properties.mag));

  return card;
}

function loadQuakes() {
  container.innerHTML = "⏳ 로딩 중...";

  fetch("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson")
    .then(checkStatus)
    .then(data => {
        container.innerHTML = "";
        const quakes = data.features.slice(0, 8); // ✅ 8개로 제한
        quakes.forEach(quake => {
          container.appendChild(createQuakeCard(quake));
        });
      })
    .catch(err => {
      container.innerHTML = `<p>😢 오류 발생: ${err.message}</p>`;
    });
}

button.addEventListener("click", loadQuakes);

function getMagnitudeClass(mag) {
    if (mag >= 6.0) return "mag-high";
    if (mag >= 4.0) return "mag-mid";
    return "mag-low";
  }
