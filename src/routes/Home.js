import VideoPlayer from "../components/VideoPlayer";
import styles from "./Home.module.css";
import Login from "./Login";
import Survey from "../components/Survey";
import { useState } from "react";

function Home() {
  const [startSurvey, setStartSurvey] = useState(false);

  return (
    <div>
      <div className={styles.logo__box}>
        <img
          className={styles.logo}
          src="images/msdl_logo.png"
          alt="please report sontneptm2@gmail"
        ></img>
      </div>

      <div className={styles.player__box}>
        {startSurvey ? <VideoPlayer /> : <h2>loading...</h2>}
      </div>

      <div className={styles.player__box}>
        {startSurvey ? <Survey /> : <h2>wait...</h2>}
      </div>
    </div>
  );
}

export default Home;
