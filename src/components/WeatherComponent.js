import React from "react";
import { ScrollView, Window, WindowContent } from "react95";
import "../assets/css/style.css";

function WeatherComponent() {
  return (
    <Window className="weather-container">
      <WindowContent>
        <ScrollView className="weather-box">
          <div className="temperature">
            <p className="temp-num">90</p>
          </div>
          <div className="weather-attr">
            <p>feels like</p>
            <p>humidity</p>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

export default WeatherComponent;
