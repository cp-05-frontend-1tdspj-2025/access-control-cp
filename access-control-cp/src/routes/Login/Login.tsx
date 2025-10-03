import { useForm } from 'react-hook-form';
import type { FormDataLogin } from "../../types/tipoLogin";

export default function Login(){

    document.title = "Login";

     const { register, handleSubmit, formState: { errors } } = useForm<FormDataLogin>();

    const onSubmit = (data: FormDataLogin) => {
    console.log('Dados do formulário:', data);
  
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

      </form>
      </div>
    </main>
  );
}