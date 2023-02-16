import React, { useEffect, useState } from "react";
import { dbFirestore } from "../../fbase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
const UserNum = () => {
  const [Num, setNum] = useState(0);
  // 개인 데이터 베이스 연결
  const docRef = doc(dbFirestore, "Users", "user");
  const docsnap = getDoc(docRef);
  useEffect(() => {
    docsnap.then(결과 => {
      const abc = 결과.data().userNum;
      setNum(결과.data().userNum);
      console.log(Num);
      updateDoc(docRef, { userNum: abc + 1 });
    });
  }, []);
  return (
    <>
      {Num}
    </>
  );
};

export default UserNum;
