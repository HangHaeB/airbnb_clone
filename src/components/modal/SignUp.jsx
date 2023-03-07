import React, { useState } from "react";
import { signUpUser } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";

const SignUp = () => {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [birth, setBirth] = useState();

  const queryClient = useQueryClient();
  const mutation = useMutation(signUpUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
    },
    onError: (response) => {
      alert(response.response.data.msg);
      setEmail("");
      setUsername("");
      setPassword("");
      setBirth("");
    },
  });

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
      birth: birth,
    };
    mutation.mutate(newUser);
  };

  return (
    <form onSubmit={handleSubmitButtonClick}>
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
        type="text"
        onChange={(e) => {
          setBirth(e.target.value);
        }}
        placeholder="생년월일 0000-00-00"
      />
      <br />
      <button onClick={signUpUser}>확인</button>
    </form>
  );
};

export default SignUp;
