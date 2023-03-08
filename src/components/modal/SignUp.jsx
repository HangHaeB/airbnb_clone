import React, { useState } from "react";
import { signUpUser } from "../../api/api";
import { useMutation, useQueryClient } from "react-query";
import { TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Button from "@mui/material/Button";

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
      <Container component="main" maxWidth="xs">
        <Typography component="h1" variant="h5" sx={{ mt: 4, mb: 3 }}>
          항해비앤비에 오신 것을 환영합니다.
        </Typography>
        <TextField
          label="이메일을 입력해주세요"
          name="email"
          value={email || ""}
          autoComplete="email"
          autoFocus
          fullWidth
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <TextField
          label="닉네임을 적어주세요"
          name="username"
          value={username || ""}
          margin="normal"
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
          value={password || ""}
          autoComplete="current-password"
          margin="normal"
          fullWidth
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />

        <TextField
          label="생년월일 0000-00-00(-는 빼고 입력해주세요)"
          name="birth"
          value={birth || ""}
          margin="normal"
          fullWidth
          onChange={(e) => {
            setBirth(e.target.value);
          }}
          required
        />
        <Button
          fullWidth
          variant="contained"
          color="error"
          sx={{ mt: 3 }}
          onClick={signUpUser}
        >
          회원가입하기
        </Button>
      </Container>
    </form>
  );
};

export default SignUp;
