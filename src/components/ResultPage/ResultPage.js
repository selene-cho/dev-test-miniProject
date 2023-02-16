import { useEffect, useState } from "react";
import styles from "./ResultPage.module.css";
import ResultList from "./Result_list";
import Spinner from "../../contents/images/Loading_img.gif";
import OtherPopup from "./OtherPopup";
import KakaoShareButton from "./KakaoShareButton";
// import UserNum from "./UserNum";
import CallToAction from "./CallToAction";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";
import { Link } from "react-router-dom";

// import OtherResult from "./otherResult";
const ResultPage = ({ frontResult, backResult, score }) => {
  const [Loading, setLoading] = useState(true);
  const [Data, setData] = useState({});
  const [Type, setType] = useState("none");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  // 로딩시간
  useEffect(() => {
    // 기준1
    console.log(score);
    if (score < 4) {
      setType("none");
      setData(ResultList[Type][0]);
    } else if (score < 7) {
      if (frontResult > backResult) {
        setType("front");
        setData(ResultList[Type][0]);
      } else if (frontResult < backResult) {
        setType("back");
        setData(ResultList[Type][0]);
      } else {
        setType("full");
        setData(ResultList[Type][1]);
      }
    } else {
      if (frontResult > backResult) {
        setType("front");
        setData(ResultList[Type][1]);
      } else if (frontResult < backResult) {
        setType("back");
        setData(ResultList[Type][1]);
      } else {
        setType("full");
        setData(ResultList[Type][2]);
      }
    }
  }, [Data]);

  const currentUrl = window.location.href.slice(0, -5);

  return Loading ? (
    <div
      className={
        styles.ResultBody //로딩창
      }
    >
      <div className={styles.Loading}>
        <img src={Spinner} />
        <p>결과를 분석중 입니다.</p>
      </div>
    </div>
  ) : (
    <div
      className={
        styles.ResultBody //결과창
      }
    >
      <div className={styles.ResultIMG}>
        <div className={styles.ResultContents}>
          <div className={styles.img_name}>
            <img src={Data.img} alt="이미지" />
            <div className={styles.TestResult}>
              <p>front 성향: {frontResult * 10}%</p>
              <p>back 성향 : {backResult * 10}%</p>
              <p>트렌드 점수: {score}점 /10</p>
            </div>
            <h1>당신은?</h1>
            <h1 className={styles.mobileTypeName}>{Data.TypeName}</h1>
          </div>
        </div>
      </div>
      <div className={styles.Resultdescription}>
        <div className={styles.ResultContents}>
          <div className={styles.ResultList}>
            <div className={styles.ResultTypeName}>
              <h1>{Data.type}</h1>
              <h1>{Data.TypeName}</h1>
            </div>
            <div className={styles.ResultTypeDes}>
              <p>{Data.Describtion}</p>
            </div>
          </div>
          <div className={styles.Link}>
            <div className={styles.Resultside}>
              <Link to="/">
                <a href="" title="Go to Main" className={styles.goMainBtn}>
                  <span className={styles.goMainBtnTop}>Main</span>
                </a>
              </Link>
            </div>
            <OtherPopup />
            <KakaoShareButton />
            <FacebookShareButton url={currentUrl}>
              <FacebookIcon size={48} round={true} borderRadius={24} />
            </FacebookShareButton>
            <TwitterShareButton url={currentUrl}>
              <TwitterIcon size={48} round={true} borderRadius={24} />
            </TwitterShareButton>
          </div>
          <CallToAction />
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
