import { useForm } from 'react-hook-form';
import type { FormDataCadastro } from "../../types/tipoCadastro";
import React, { useState } from 'react';
import Gifsucesso from '../../img/aceito.gif'
import Giferro from '../../img/erro.gif'

export default function Cadastro(){

    document.title = "Cadastro";

    const [loginError, setLoginError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormDataCadastro>();

    const onSubmit = (data: FormDataCadastro) => {
    console.log('Dados do formulário:', data)
    const isLoginValid = true;

    if(!isLoginValid) {
      setLoginError(true);
      setLoginSuccess(false);
    } else {
      setLoginError(false);
      setLoginSuccess(true);
    }
  
};

    return(
     <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-full max-w-md bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

        <div>
          <label htmlFor="nomeUsuario" className="block text-sm font-medium text-gray-700">
              Nome de usuário:
            </label>
            <input
              id="nomeUsuario"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register('nomeUsuario', { required: 'Nome de usuário é obrigatório' })}
            />
            {errors.nomeUsuario && (
              <span style={{color : "red"}}>{errors.nomeUsuario.message}</span>
          )}
        </div>


        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              id="email"
              type="email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register('email', {
                required: 'Email é obrigatório',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Email inválido'
              }
            })}
          />
          {errors.email && (
            <span style={{ color: 'red' }}>{errors.email.message}</span>
          )}
        </div>

       <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-700">
              Senha:
            </label>
            <input
              id="senha"
              type="password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              {...register('senha', { required: 'Senha é obrigatória' })}
            />
            {errors.senha && (
              <span style={{color: "red"}}>{errors.senha.message}</span>
            )}
          </div>

        <button type="submit" className="w-full bg-cyan-400 text-white py-2 px-4 rounded-md hover:bg-blue-800 transition-colors">Entrar</button>
            
          {loginError && (
          <div className="mt-4 flex justify-center flex-col w-full items-center">
            <img src={Giferro} alt="Imagem do Will smith sem saber quem voce é " className="w-20 h-20" />
            <p>Erro ao cadastrar usuário</p>
          </div>
          )}

          {loginSuccess && (
          <div className="mt-4 flex justify-center flex-col w-full items-center">
            <img src={Gifsucesso} alt="Imagem Will smith comemorando o seu acesso " className="w-20 h-20" />
            <p>Cadastrado com sucesso</p>
          </div>
          )}
      </form>
      </div>
    </main>
  );
}