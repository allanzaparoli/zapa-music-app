import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createNewUserAccount } from 'api';
import { useDispatch } from 'react-redux';
import { setSimpleLogin } from 'redux/slices';
import * as S from './styles';

export function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const result = await createNewUserAccount({ email, password });
      dispatch(setSimpleLogin({ ...result, isLogged: true }));
      alert('Conta criada com sucesso!');
      return navigate('/');
    } catch (error) {
      return alert('Erro ao criar conta!');
    }
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Title>Criar conta</S.Title>
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
      <S.Button type="submit">Criar conta</S.Button>
    </S.Form>
  );
}
