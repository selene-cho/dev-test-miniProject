import styles from "./Main.module.css";
import Popup from "./Popup";
import UserNum from "../ResultPage/UserNum";

function Main() {
  return (
    <div className={styles.mainBg}>
      <p className={styles.mainMusic}>음악 재생 중 🎶</p>
      <div className={styles.mainContents}>
        <h1 className={styles.mainTitle}>개발 관심도 & 마인드 측정테스트</h1>
        <div className={styles.mainText}>
          <p>개발에 대해 한번이라도 관심을 가져본적이 있나요?</p>
          <p>개발자에 대해 얼마나, 어디까지 알고 있나요?</p>
          <p>혹시 이미 개발 공부를 하고 있다면,</p>
          <p>개발세계의 밈, 트렌드에 대해 얼마나 알고 있나요?</p>
        </div>
        <div className={styles.footer}>
          <div className={styles.userCount}>
            테스트 참여자 수 : &nbsp;&nbsp;
            <UserNum className={styles.UserNum} />명
          </div>
          <Popup />
        </div>
      </div>
    </div>
  );
}

export default Main;
