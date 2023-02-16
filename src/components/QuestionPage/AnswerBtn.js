import styles from "./AnswerBtn.module.css";

const AnswerBtn = (props) => {
  console.log(props.a);

  return (
    <>
      {props.a.answer[0].includes("imageData") ? (
        <img
          className={styles.answerImg}
          src={props.a.answer[0]}
          value={props.a.type}
          onClick={props.answerHandler}
          alt=""
        />
      ) : (
        <button
          className={styles.answerButton}
          key={Math.random()}
          value={props.a.type}
          onClick={props.answerHandler}
        >
          {props.a.answer}
        </button>
      )}
    </>
  );
};

export default AnswerBtn;
