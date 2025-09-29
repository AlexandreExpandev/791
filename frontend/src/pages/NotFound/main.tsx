import { Link } from 'react-router-dom';
import { Button } from '@/core/components/Button';

/**
 * @page NotFoundPage
 * @summary A page displayed when a route is not found (404).
 * @domain core
 * @type page-component
 * @category error-handling
 */
export const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-9xl font-bold text-blue-500">404</h1>
      <h2 className="text-3xl font-semibold mt-4 mb-2">Página não encontrada</h2>
      <p className="text-gray-400 mb-6">
        Desculpe, a página que você está procurando não existe.
      </p>
      <Button asChild>
        <Link to="/">Voltar para o Início</Link>
      </Button>
    </div>
  );
};
