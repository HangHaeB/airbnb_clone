import React, { useState } from "react";
import { signUpUser } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const SignUp = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [birth, setBirth] = useState("");
  const navigate = useNavigate();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#f1096a",
        darker: "#940060",
      },
    },
  });
  const queryClient = useQueryClient();
  const mutation = useMutation(signUpUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("user");
      setEmail("");
      setUsername("");
      setPassword("");
      setBirth("");
      navigate("/");
    },
    onError: (response) => {
      alert(response.response.data.msg);
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
    console.log(newUser);
    mutation.mutate(newUser);
  };

  return (
    <form onSubmit={handleSubmitButtonClick}>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CloseButton
            onClick={() => {
              props.setSignUpModal(false);
            }}
          >
            X
          </CloseButton>
          <SignUpTitle>회원가입</SignUpTitle>
          <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 3 }}>
            항해비앤비에 오신 것을 환영합니다.
          </Typography>
          <TextField
            label="이메일을 입력해주세요"
            name="email"
            value={email}
            autoComplete="email"
            autoFocus
            sx={{ mb: 1 }}
            fullWidth
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <TextField
            label="닉네임을 적어주세요"
            name="username"
            value={username}
            sx={{ mb: 1 }}
            fullWidth
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />

          <TextField
            label="비밀번호를 입력해주세요"
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            sx={{ mb: 1 }}
            fullWidth
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />

          <TextField
            label="생년월일 0000-00-00(-는 빼고 입력해주세요)"
            name="birth"
            value={birth}
            sx={{ mb: 1 }}
            fullWidth
            onChange={(e) => {
              setBirth(e.target.value);
            }}
            required
          />
          <Button type="submit" fullWidth variant="contained" color="primary" size="large" sx={{ mt: 3 }}>
            회원가입하기
          </Button>
        </Container>
      </ThemeProvider>
    </form>
  );
};

export default SignUp;

const CloseButton = styled.button`
  background-color: white;
  font-size: 20px;
`;

const SignUpTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  border-bottom: solid 1px black;
`;
