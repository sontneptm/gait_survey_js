import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form_signin}>
        <h2 className={styles.form_signin_heading}>Please login</h2>
        <input
          type={styles.text}
          className={styles.form_control}
          name="username"
          placeholder="성함"
          required=""
          autoFocus=""
        />
        <input
          type="password"
          className={styles.form_control}
          name="password"
          placeholder="소속"
          required=""
        />
        <label className={styles.checkbox}>
          <input
            type="checkbox"
            value="remember-me"
            id="rememberMe"
            name="rememberMe"
          />{" "}
          Remember me
        </label>
        <button className="btn btn-lg btn-primary btn-block" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
