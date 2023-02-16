import styles from "./Question.module.css";

const Question = ({ d }) => {
  return (
    <>
      {d.question[0].includes("imageData") ? (
        <>
          <div className={styles.questionImgTitle}>{d.question[1]}</div>
          <img
            src={process.env.PUBLIC_URL + d.question[0]}
            className={styles.questionImg}
            alt=""
          />
        </>
      ) : (
        <div className={styles.question}>{d.question}</div>
      )}
    </>
  );
};

export default Question;
