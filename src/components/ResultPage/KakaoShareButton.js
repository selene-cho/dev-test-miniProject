import React, { useEffect } from "react";
import styles from "./KakaoShareButton.module.css";
const KakaoShareButton = () => {
  const URL = window.location.href.slice(0, -5);
  console.log(URL);
  useEffect(() => {
    createKakaoButton();
  }, []);
  const createKakaoButton = () => {
    // kakao sdk script이 정상적으로 불러와졌으면 window.Kakao로 접근이 가능합니다
    if (window.Kakao) {
      const kakao = window.Kakao;
      // 중복 initialization 방지
      if (!kakao.isInitialized()) {
        // 두번째 step 에서 가져온 javascript key 를 이용하여 initialize
        kakao.init(process.env.REACT_APP_KAKAO_KEY);
      }
      kakao.Link.createDefaultButton({
        // Render 부분 id=kakao-link-btn 을 찾아 그부분에 렌더링을 합니다
        container: "#kakao-link-btn",
        objectType: "feed",
        content: {
          title: "타이틀",
          description: "개발자가 되고싶은 당신! 개발자 놀이공원에서 당신의 능력을 시험해 보세요!",
          imageUrl:
            "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FBZRmm%2FbtrmY5fd4fP%2FHoFI0JpATA9kaaPvUq30Yk%2Fimg.jpg", // i.e. process.env.FETCH_URL + '/logo.png'
          link: {
            mobileWebUrl: URL,
            webUrl: URL
          }
        },

        buttons: [
          {
            title: "웹으로 보기",
            link: {
              mobileWebUrl: URL,
              webUrl: URL
            }
          }
        ]
      });
    }
  };
  return (
    <div className={styles.kakao0_share_button}>
      <div className="kakao-share-button">
        {/* Kakao share button */}
        <button id="kakao-link-btn">
          <img
            src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_small.png"
            alt="kakao-share-icon"
          />
        </button>
      </div>
    </div>
  );
};
export default KakaoShareButton;
