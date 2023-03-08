import React, { useState } from "react";
import { loginUser, getUsers } from "../../api/api";
import styled from "styled-components";
import { useQueryClient, useMutation } from "react-query";
import { setCookie } from "../../api/cookies";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(loginUser, {
    onSuccess: (response) => {
      queryClient.invalidateQueries("user");
      setCookie("ACCESS_TOKEN", response.headers.authorization);
      setCookie("RT_TOKEN", response.headers.rt_authorization);

      localStorage.setItem("name", response.data.username);
      console.log(response);
    },
    onError: () => {
      alert("로그인정보가 일치하지 않습니다.");
    },
  });

  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    const loginUser = {
      email: email,
      password: password,
    };
    mutation.mutate(loginUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmitButtonClick}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 3 }}>
            항해비앤비에 오신 것을 환영합니다.
          </Typography>

          <TextField
            label="이메일을 입력해주세요"
            name="email"
            value={email}
            autoComplete="email"
            margin="normal"
            autoFocus
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />

          <TextField
            label="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3 }}
            onClick={loginUser}
          >
            로그인하기
          </Button>
        </Container>
      </form>
    </div>
  );
};

export default Login;

const Logincontainer = styled.div`
  border: 1px solid black;
`;

const Blackbackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1000;
`;
