export default function Home(){

    document.title = "Home";

    return(
    <main>
      <h1>Access control</h1>

      <section>
        <div>
          <p>Bem-vindo ao sistema de controle de acesso!</p>
          <p>Use o menu para navegar entre as páginas.</p>
          <p>Esse site foi desenvolvido como parte de uma prova para Frontend.</p>
          <p>Use o menu a cima para acessar as funcionalidades do sistema.</p>
        </div>
      </section>

      <section>
        <div>
          <h2>Recursos do Sistema</h2>
          <ul>
            <li>Cadastro de usuários</li>
            <li>Login de usuários</li>
            <li>Listagem de integrantes do grupo</li>
          </ul>
        </div>
      </section>
    </main>
  );
}