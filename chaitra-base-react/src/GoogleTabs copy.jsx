import React, { useState } from "react";

function GoogleTabs() {
  // let currentTab = "videos";

  const [currentTab, setCurrentTab] = useState("all");

  const changeTabToAll = () => {
    setCurrentTab("all");
  };

  const changeTabToImages = () => {
    setCurrentTab("images");
  };

  const changeTabToVideos = () => {
    setCurrentTab("videos");
  };

  return (
    <>
      <ul
        className="tabs"
        style={{ display: "flex", gap: "1rem", listStyle: "none" }}
      >
        <li
          onClick={changeTabToAll}
          className={currentTab === "all" ? "active" : ""}
        >
          All
        </li>
        <li
          onClick={changeTabToImages}
          className={currentTab === "images" ? "active" : ""}
        >
          Images
        </li>
        <li
          onClick={changeTabToVideos}
          className={currentTab === "videos" ? "active" : ""}
        >
          Videos
        </li>
      </ul>

      {currentTab === "all" && (
        <div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
          <div>All All All All All All All All All All All All All All</div>
        </div>
      )}

      {currentTab === "images" && (
        <div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
          <div>
            Images Images Images Images Images Images Images Images Images
            Images Images Images Images Images
          </div>
        </div>
      )}

      {currentTab == "videos" && (
        <div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
          <div>
            Videos Videos Videos Videos Videos Videos Videos Videos Videos
            Videos Videos Videos Videos Videos
          </div>
        </div>
      )}
    </>
  );
}

export default GoogleTabs;
