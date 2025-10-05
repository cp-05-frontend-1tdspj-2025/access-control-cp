import { useEffect, useState } from "react";
import { set, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Gifsucesso from '../../img/aceito.gif';
import Giferro from '../../img/erro.gif';
import type { FormDataCadastro } from "../../types/tipoCadastro";



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
  } = useForm<FormDataCadastro>({ mode: "onChange" });

const onSubmit = async (dados: FormDataCadastro) => {
  setLoginError(false);
  setLoginSuccess(false);

  try {
    const response = await fetch(URL_API); // agora é válido
    const usuarios = await response.json();

    const usuarioEncontrado = usuarios.find(
        (usuario: FormDataCadastro) => usuario.email === dados.email && usuario.senha === dados.senha);

    if (usuarioEncontrado) {
      setLoginSuccess(true);
      localStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
    } else {
      setLoginError(true);
    }
  } catch (error) {
    console.error("Erro ao buscar usuários:", error);
    setLoginError(true);
  }
};

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="rounded-lg w-full max-w-md bg-white p-8 shadow-md">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow text-black"
        >
          <h2 className="text-lg font-semibold text-center">Login</h2>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email", {
                required: "Informe o email",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email inválido",
                },
              })}
              aria-invalid={!!errors.email}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="exemplo@email.com"
            />
            {errors.email && (
              <p role="alert" className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              {...register("senha", { required: "Informe a senha" })}
              aria-invalid={!!errors.senha}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="********"
            />
            {errors.senha && (
              <p role="alert" className="text-red-500">{errors.senha.message}</p>
            )}
          </div>


          <div className="flex justify-end gap-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors"
            >
              {isSubmitting ? "Entrando..." : "Login"}
            </button>
          </div>

          {loginError && (
            <div className="mt-4 flex justify-center flex-col w-full items-center text-red-500 font-semibold">
              <img src={Giferro} alt="Erro no login" className="w-20 h-20" />
              <p>Email ou senha incorretos</p>
            </div>
          )}

          {loginSuccess && (
            <div className="mt-4 flex justify-center flex-col w-full items-center text-green-600 font-semibold">
              <img src={Gifsucesso} alt="Login realizado" className="w-20 h-20" />
              <p>Login realizado com sucesso!</p>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
