import React from "react";
import { ScrollView, Window, WindowContent } from "react95";
import "../assets/css/style.css";

function NewsComponent() {
  return (
    <Window className="news-container">
      <WindowContent>
        <ScrollView className="news-scroll-container">
          <div className="news-module">
            <div className="news-box">
              <div className="news-image-box">
                <img className="news-image" src="" />
              </div>
              <p className="news-title">
                This is important news plz This is important news plz This is
                important news plz
              </p>
            </div>
            <div className="news-box">
              <div className="news-image-box">
                <img className="news-image" src="" />
              </div>
              <p className="news-title">
                This is important news plz This is important news plz This is
                important news plz
              </p>
            </div>
            <div className="news-box">
              <div className="news-image-box">
                <img className="news-image" src="" />
              </div>
              <p className="news-title">
                This is important news plz This is important news plz This is
                important news plz
              </p>
            </div>
            <div className="news-box">
              <div className="news-image-box">
                <img className="news-image" src="" />
              </div>
              <p className="news-title">
                This is important news plz This is important news plz This is
                important news plz
              </p>
            </div>
          </div>
        </ScrollView>
      </WindowContent>
    </Window>
  );
}

export default NewsComponent;
