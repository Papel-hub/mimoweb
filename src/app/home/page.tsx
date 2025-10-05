'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PromoBanner from '@/components/PromoBanner';
import ProductCard from '@/components/ProductCard';

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal com padding-top para não ficar escondido atrás do header */}
      <main className="flex-grow  px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
        {/* Banner Promocional */}
        <PromoBanner />

        {/* Sugestões para você */}
        <section>
          <h2 className="text-xl font-bold mb-6">Sugestões para você:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <ProductCard
                key={i}
                image="/images/p1.png"
                title="Cesta Romântica"
              />
            ))}
          </div>
        </section>

        <div className="mt-8 text-center">
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="text-red-900 hover:underline font-medium focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
            aria-label="Ver mais produtos"
          >
            Ver mais →
          </button>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}