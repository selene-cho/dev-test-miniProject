import { useState, useEffect } from "react";
import styles from "./CountUser.module.css";

function CountUser() {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    setUserCount(userCount + 1);
  }, []);

  return (
    <div>
      <h3>테스트 참여자 수 : {userCount}</h3>
    </div>
  );
}

export default CountUser;
