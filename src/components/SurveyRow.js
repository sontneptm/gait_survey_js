import styles from "./SurveyRow.module.css";

function SurveyRow({
  l_name,
  one,
  two,
  three,
  four,
  five,
  six,
  seven,
  r_name,
}) {
  return (
    <div>
      <div id="rb-1" className={styles.rb}>
        <div className={styles.rb_tab} data-value="1">
          <div> {l_name} </div>
        </div>
        <div className={styles.rb_tab} data-value="1">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{one}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="2">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{two}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="3">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{three}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="4">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{four}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="5">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{five}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="6">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{six}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="7">
          <div className={styles.rb_spot}>
            <span className={styles.rb_txt}>{seven}</span>
          </div>
        </div>
        <div className={styles.rb_tab} data-value="1">
          <div>{r_name}</div>
        </div>
      </div>
    </div>
  );
}

export default SurveyRow;
