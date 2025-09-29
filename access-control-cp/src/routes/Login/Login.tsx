import { useForm } from 'react-hook-form';
import type { FormDataLogin } from "../../types/tipoLogin";

export default function Login(){

    document.title = "Login";

     const { register, handleSubmit, formState: { errors } } = useForm<FormDataLogin>();

    const onSubmit = (data: FormDataLogin) => {
    console.log('Dados do formulário:', data);
  
};


    return(
     <main>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label htmlFor="nomeUsuario">Nome de usuário:</label>
          <input
            id="nomeUsuario"
            {...register('nomeUsuario', { required: 'Nome de usuário é obrigatório' })}
          />
          {errors.nomeUsuario && (
            <span style={{ color: 'red' }}>{errors.nomeUsuario.message}</span>
          )}
        </div>


        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
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

  
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}