import React from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="loginContainer">
      <div className="textPassword">
        Sifrenizi sifirlamak istediginiz Email adresini girin
      </div>

      <label className="inputLabelPassword">E-Mail </label>
      <input
        type="email"
        className="inputPassword"
        placeholder="E-mail adresinizi giriniz"
      />

      <div className="buttonContainer">
        <button className="button">Sifremi Sifirla</button>
      </div>
      <Link className="link" to="/">
        <div className="orLogin">veya Giris Yapin</div>
      </Link>
    </div>
  );
}
