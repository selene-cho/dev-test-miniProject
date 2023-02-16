import React, { useState } from "react";
import styles from "./OtherPopup.module.css";
import ResultList from "./Result_list";
const OtherPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className={styles.popupBtn}>
        <button onClick={popupClick}>모든결과보기</button>
      </div>
      {showPopup &&
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.content}>
              {ResultList.back.map(back => {
                return (
                  <div key={back.type} className={styles.popupDiv}>
                    <img src={back.img} className={styles.img} alt="" />
                    <div>
                      <div>
                        {back.type}
                        {back.TypeName}
                      </div>

                      <div>
                        {back.Describtion}
                      </div>
                    </div>
                  </div>
                );
              })}
              {ResultList.front.map(front => {
                return (
                  <div key={front.type} className={styles.popupDiv}>
                    <img src={front.img} className={styles.img} alt="" />
                    <div>
                      <div>
                        {front.type}
                        {front.TypeName}
                      </div>
                      <div>
                        {front.Describtion}
                      </div>
                    </div>
                  </div>
                );
              })}
              {ResultList.full.map(full => {
                return (
                  <div key={full.type} className={styles.popupDiv}>
                    <img src={full.img} className={styles.img} alt="" />
                    <div>
                      <div>
                        {full.type}

                        {full.TypeName}
                      </div>
                      <div>
                        {full.Describtion}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <a className={styles.startBtn}>
              <button
                onClick={() => {
                  setShowPopup(false);
                }}
              >
                닫기
              </button>
            </a>
          </div>
        </div>}
    </div>
  );
};

export default OtherPopup;
