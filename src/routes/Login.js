import styles from "./Login.module.css";

function Login() {
  return (
    <div>
      <div className={styles.logo__box}>
        <img
          className={styles.logo}
          src="images/msdl_logo.png"
          alt="please report sontneptm2@gmail"
        ></img>
      </div>
      <div className={styles.login_page}>
        <div className={styles.form}>
          <h1>보행실험 설문조사</h1>
          <h4>답변하시는분의 정보를 입력해주세요</h4>
          <form className={styles.register_form}>
            <input type="text" placeholder="test" />
            <input type="password" placeholder="소속" />
            <input type="text" placeholder="email address" />
            <button>create</button>
            <p className="message">
              Already registered? <a href="#">Sign In</a>
            </p>
          </form>
          <form className={styles.login_form}>
            <input type="text" placeholder="이름" required />
            <input type="text" placeholder="직위" required />
            <input type="text" placeholder="소속" required />
            <button>설문시작</button>
            <p className={styles.message}>
              연구 내용이 궁금하신가요? <a href="#">읽어보기</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
