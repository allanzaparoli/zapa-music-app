import { loginUser } from 'api';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSimpleLogin } from 'redux/slices';
import * as S from './styles';

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await loginUser({ email, password });
      dispatch(setSimpleLogin({ ...result, isLogged: true }));
      alert('Logado com sucesso!');
      return navigate('/');
    } catch (error) {
      return alert('Não foi possível logar! Verifique os dados!');
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Login</S.Title>
      <S.TextField
        label="Email"
        type="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <S.TextField
        label="Password"
        type="password"
        onChange={(event) => setPassword(event.target.value)}
        value={password}
      />
      <S.Button type="submit">Login</S.Button>
    </S.Form>
  );
}
