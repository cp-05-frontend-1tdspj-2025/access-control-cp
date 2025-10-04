import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Gifsucesso from '../../img/aceito.gif';
import Giferro from '../../img/erro.gif';

type TipoLogin = {
  email: string;
  senha: string;
};

const URL_API = "http://localhost:3000/usuarios";

export default function Login() {
  useEffect(() => {
    document.title = "Login";
  }, []);

  const navigate = useNavigate();
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm<TipoLogin>({ mode: "onChange" });

  const onSubmit = (dados: TipoLogin) => {
    setLoginError(false);
    setLoginSuccess(false);

    try {
      const response = await fetch(URL_API);
      const usuarios = await response.json();

      const usuarioEncontrado = usuarios.find(
        (usuario: TipoLogin) =>
          usuario.email === dados.email && usuario.senha === dados.senha
      );
      if (usuarioEncontrado) {
        setLoginSuccess(true);
        localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        }else {
        setLoginError(true);
      }
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      setLoginError(true);
    }
  };

  return (
    <main>
      <h1>Login</h1>
    </main>
  );
}
