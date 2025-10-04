import { useForm } from 'react-hook-form';
import type { FormDataCadastro } from "../../types/tipoCadastro";
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

type TipoUsuario = {
  nomeUsuario: string;
  email: string;
  senha: string;
};

const URL_API = "http://localhost:3000/usuarios";

export default function Cadastro(){

    useEffect(() => {
      document.title = "Cadastrar Usuário";
    }, []);

    const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting, isValid, isSubmitSuccessful },
  } = useForm<TipoUsuario>({ mode: "onChange" });


 const onSubmit = (dados: TipoUsuario) => {
    const cadastrarUsuario = async () => {
      await fetch(URL_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dados),
      });
    };

    cadastrarUsuario();
    alert("Usuário cadastrado com sucesso!");
    navigate("/login");
  };

  
    return(
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div>
          <form
           onSubmit={handleSubmit(onSubmit)}
            className="mx-auto max-w-md space-y-4 rounded-xl border border-gray-200 bg-white p-6 shadow text-black"
          >
            <h2 className="text-lg font-semibold text-center">Cadastro de Usuário</h2>

        <div>
            <label
              htmlFor="nomeUsuario"
              className="block text-sm font-medium text-gray-700"
            >
              Nome de Usuário
            </label>
            <input
              type="text"
              id="nomeUsuario"
              aria-invalid={!!errors.nomeUsuario}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              placeholder="Ex.: Joao Silva"
            />
            {errors.nomeUsuario && (
              <p role="alert" className="text-red-500">
                {errors.nomeUsuario.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
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
              <p role="alert" className="text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="senha"
              className="block text-sm font-medium text-gray-700"
            >
              Senha
            </label>
            <input
              type="password"
              id="senha"
              aria-invalid={!!errors.senha}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            />
            {errors.senha && (
              <p role="alert" className="text-red-500">
                {errors.senha.message}
              </p>
            )}
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <button
              type="submit"
              disabled={isSubmitting || !isValid}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:ring-2 focus:ring-blue-300"
            >
              {isSubmitting ? "Enviando..." : "Cadastrar"}
            </button>
            {isSubmitSuccessful && (
              <p className="text-green-600">Usuário cadastrado com sucesso!</p>
            )}
          </div>
      </form>
      </div>
    </main>
  );
}
