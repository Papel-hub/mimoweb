'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCartaoStatus } from '@/hook/useCartaoStatus';

export default function VerificarCartaoPage() {
  const router = useRouter();
  const { hasCartao, loading, error } = useCartaoStatus();

  useEffect(() => {
    if (!loading && !error) {
      if (hasCartao) {
        router.push('/cartao/meu-cartao');
      } else {
        router.push('/cartao/solicitar-cartao');
      }
    }
  }, [hasCartao, loading, error, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-rose-600 border-r-transparent"></div>
          <p className="mt-4 text-gray-600">Verificando seu cartão Mimo...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-red-500">Erro ao verificar o cartão. Tente novamente.</p>
      </div>
    );
  }

  return null; // Redirecionamento ocorrerá automaticamente
}
