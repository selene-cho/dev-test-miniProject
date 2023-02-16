import ProgressBar from "./ProgressBar";
import QuestionPage from "../components/QuestionPage/QuestionPage";
import styles from "./Routing.module.css";

const Routing = ({ result, data, tendencyData }) => {
  return (
    <div className={styles.container}>
      <ProgressBar result={result} data={data} />
      <QuestionPage data={data} tendencyData={tendencyData} />
    </div>
  );
};

export default Routing;
