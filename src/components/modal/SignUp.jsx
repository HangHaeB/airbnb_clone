import React, { useState } from "react";
import { postSignUp } from "../../api/api";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [birth, setBirth] = useState();

  return (
    <div>
      <input
        value={email}
        type={"text"}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="이메일을 적어주세요"
      />
      <br />

      <input
        value={username}
        type={"text"}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="닉네임을 적어주세요"
      />
      <br />

      <input
        value={password}
        type={"password"}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="비밀번호를 적어주세요"
      />
      <br />

      <input
        value={birth}
        type={"text"}
        onChange={(e) => {
          setBirth(e.target.value);
        }}
        placeholder="생년월일 0000-00-00"
      />
      <br />
      <button onClick={postSignUp}>확인</button>
    </div>
  );
};

export default SignUp;
