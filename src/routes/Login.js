import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.login}>
      <h1>설문조사 참여</h1>
      <form method="post">
        <input
          className={styles.input}
          type="text"
          name="u"
          placeholder="Username"
          required="required"
        />
        <input
          type="password"
          name="p"
          placeholder="Password"
          required="required"
        />

        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
    </div>
  );
}

export default Login;
