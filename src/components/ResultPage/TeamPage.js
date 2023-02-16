import styles from "./TeamPage.module.css";

const TeamPage = () => {
  const teamData = [
    {
      name: "백관열",
      img: "/imageData/teamImg/Baek.jpg",
      github: "https://github.com/djm030",
      velog: "https://velog.io/@djm030",
    },
    {
      name: "조다희",
      img: "/imageData/teamImg/Cho.jpg",
      github: "https://github.com/selene-cho",
      velog: "https://velog.io/@fullmoon29",
    },
    {
      name: "최현우",
      img: "/imageData/teamImg/Choi.jpeg",
      github: "https://github.com/chhw130",
      velog: "https:/velog.io/@chhw130",
    },
  ];

  const socialImgHandler = (e) => {
    console.log(e.currentTarget.textContent);
  };

  return (
    <div className={styles.teamDiv}>
      {teamData.map((team) => {
        return (
          <div className={styles.container}>
            <div className={styles.introDiv}>
              <img alt="" src={team.img} className={styles.teamImg} />
              <div className={styles.teamName}>{team.name}</div>
              <div>
                <a href={team.github}>
                  <img
                    src="/imageData/teamImg/githubImg.png"
                    className={styles.socialImg}
                    value={team.github}
                    onClick={socialImgHandler}
                    alt=""
                  />
                </a>
                <a href={team.velog}>
                  <img
                    src="/imageData/teamImg/velogImg.png"
                    className={styles.socialImg}
                    value={team.velog}
                    onClick={socialImgHandler}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamPage;
