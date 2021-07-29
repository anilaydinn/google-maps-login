import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="text">Google Maps'e Hosgeldiniz</div>

      <label className="inputLabel">E-Mail </label>
      <input
        type="email"
        className="input"
        placeholder="E-mail adresinizi giriniz"
      />

      <label className="inputLabel" style={{ marginTop: "21px" }}>
        Sifre
      </label>
      <input type="password" className="input" placeholder="******" />

      <Link className="link" to="/forgotPassword">
        <div className="forgotPassword">Sifremi Unuttum</div>
      </Link>
      <div className="buttonContainer">
        <button className="button">Giris Yap</button>
      </div>
    </div>
  );
}
