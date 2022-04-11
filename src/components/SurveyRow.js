import styles from "./SurveyRow.module.css";
import CheckBox from "./CheckBox";

function SurveyRow({ l_name, r_name }) {
  return (
    <div>
      <div id="rb-1" className={styles.rb}>
        <div className={styles.rb_tab} data-value="1">
          <div className={styles.emotion_l}> {l_name} </div>
        </div>
        <div className={styles.rb_tab} data-value="1">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="2">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="3">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="4">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="5">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="6">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="7">
          <CheckBox />
        </div>
        <div className={styles.rb_tab} data-value="1">
          <div className={styles.emotion_r}>{r_name}</div>
        </div>
      </div>
    </div>
  );
}

export default SurveyRow;
