import { Outlet } from 'react-router-dom';

/**
 * @component RootLayout
 * @summary The main layout for the application, containing the header, main content area, and footer.
 * @domain core
 * @type layout-component
 * @category layout
 */
export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-800 shadow-md py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-xl font-bold text-white">Pedra, Papel e Tesoura</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8 flex items-center justify-center">
        <Outlet />
      </main>

      <footer className="bg-gray-800 text-gray-400 text-center py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Jogo. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};
