import "./registerform.css";
import "../fomatGeneral.css";
const RegisterForm = () => {
  return (
    <div className="register-form">
      <h2 className="register-content">Save time, save money!</h2>
      <p className="register-content">
        sign up and we'll send the best deals to you
      </p>
      <div className="form-input">
        <input
          type="text"
          className="form-input-register input-register"
          placeholder="Your Email"
        ></input>
        <button className="btn btn-subscribe input-register">Subscribe</button>
      </div>
    </div>
  );
};
export default RegisterForm;
