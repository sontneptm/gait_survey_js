import styles from "./Survey.module.css";

function Survey() {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type="checkbox" checked id="checkbox" />
        <label for="checkbox"></label>
      </div>
    </div>
  );
}

export default Survey;
