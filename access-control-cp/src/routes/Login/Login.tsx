import { useForm } from "react-hook-form";
import type { FormDataCadastro } from "../../types/tipoCadastro";
import { useState } from "react";


export default function Login() {
  document.title = "Login";

  // Inicializa o formulário
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Função ao enviar o formulário
  const onSubmit = (data) => {
    console.log("Dados do login:", data);
    // Aqui você pode chamar uma API ou validar login
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Campo Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Email inválido",
                },
              })}
            />
            {errors.email && (
              <span style={{ color: "red" }}>{errors.email.message}</span>
            )}
          </div>

          {/* Campo Senha */}
          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register("senha", { required: "Senha é obrigatória" })}
            />
            {errors.senha && (
              <span style={{ color: "red" }}>{errors.senha.message}</span>
            )}
          </div>

          {/* Botão */}
          <button
            type="submit"
            className="w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
