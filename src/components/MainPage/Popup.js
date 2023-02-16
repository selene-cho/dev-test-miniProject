import { useState } from "react";
import styles from "./Popup.module.css";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);

  const popupClick = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <div className={styles.popupBtn}>
        <button onClick={popupClick}>테스트 하러 가기</button>
      </div>
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <div className={styles.content}>
              <p>생각나는 대로 답변 해주세요.</p>
              <p>단순 재미를 위한 테스트일 뿐😏</p>
              <p>결과에 너무 진지해지지 말기😜</p>
            </div>
            <a className={styles.startBtn}>
              <button
                onClick={() => {
                  setShowPopup(false);
                  window.location.href = "/test";
                }}
              >
                그럼 시작해볼까요?!
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Popup;
