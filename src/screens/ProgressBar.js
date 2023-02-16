import styled from "styled-components";
import horse from "../contents/images/horse.png";

const ProgressBox = styled.div`
  position: relative;
  width: 100vw;
  height: 10vh;
  background-color: #eac7c7;
  z-index: 50;
`;
const Progress = styled.div`
  position: absolute;
  width: 70vw;
  height: 3vh;
  border-radius: 10px;
  background-color: #80cbc4;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.4);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 99;
`;
const ProgressImg = styled.span`
  background: url(${horse});
  background-size: 100% 100%;
  height: 6.5vh;
  width: 6vh;
  border-radius: 5px;
  left: ${(props) => props.width};
  top: -1rem;
  position: absolute;
  transition: all 0.6s ease-in-out 0s;
`;
const ProgressNum = styled.p`
  margin-top: 2vh;
  text-align: center;
  font-size: 3vh;
  font-weight: bolder;
  color: white;
  font-family: "Ansungtangmyun";
  text-shadow: 1px 1px 4px rgb(40, 40, 40);
`;

const ProgressBar = ({ result, data }) => {
  /** 상단 프로그레스바 */
  const barWidth = result;

  return (
    <ProgressBox>
      <Progress>
        <ProgressImg width={(barWidth / data.length) * 100 + "%"}>
          <ProgressNum>{barWidth}</ProgressNum>
        </ProgressImg>
      </Progress>
    </ProgressBox>
  );
};

export default ProgressBar;
