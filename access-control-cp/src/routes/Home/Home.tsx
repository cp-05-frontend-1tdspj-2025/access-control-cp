export default function Home() {
  document.title = "Home";
 
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center mb-10">
        <h1 className="text-4xl font-extrabold text-blue-700 mb-6">
          Access Control
        </h1>
        <div className="space-y-4 text-gray-700 text-lg">
          <p>Bem-vindo ao sistema de controle de acesso!</p>
          <p>Use o menu para navegar entre as páginas.</p>
          <p>Esse site foi desenvolvido como parte de uma prova para Frontend.</p>
          <p>Use o menu acima para acessar as funcionalidades do sistema.</p>
        </div>
      </div>
 
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-lg p-8 text-center">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          Recursos do Sistema
        </h2>
        <ul className="space-y-2 text-gray-800 text-left mx-auto max-w-sm list-disc list-inside">
          <li>Cadastro de usuários</li>
          <li>Login de usuários</li>
          <li>Listagem de integrantes do grupo</li>
        </ul>
      </div>
    </main>
  );
}