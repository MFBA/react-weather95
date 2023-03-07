import React from "react";
import { ScrollView, Window, WindowContent } from "react95";
import "../assets/css/style.css";

function NewsComponent() {
  return (
    <Window className="news-container">
      <WindowContent>
        <ScrollView className="news-box">
          <div>
            <h1>90</h1>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

export default NewsComponent;
