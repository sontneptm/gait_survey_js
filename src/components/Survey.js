import styles from "./Survey.module.css";

function Survey() {
  return (
    <section title=".squaredThree">
      <div className={styles.squaredThree}>
        <input
          type="checkbox"
          value="None"
          id="squaredThree"
          name="check"
          checked
        />
        <label for="squaredThree"></label>
      </div>
    </section>
  );
}

export default Survey;
