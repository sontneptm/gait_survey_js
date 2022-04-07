import styles from "./CheckBox.module.css";

function CheckBox() {
  return (
    <div className={styles.container}>
      <div className={styles.round}>
        <input type="checkbox" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
}

export default CheckBox;
