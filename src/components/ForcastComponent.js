import React from "react";
import { ScrollView, Window, WindowContent } from "react95";
import "../assets/css/style.css";

function ForcastComponent() {
  return (
    <Window className="forcast-container">
      <WindowContent>
        <ScrollView className="forcast-box">
          <div>
            <h1>90</h1>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

export default ForcastComponent;
