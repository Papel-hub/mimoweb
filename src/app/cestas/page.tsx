// app/cestas/page.tsx
'use client';

import React, { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import TabButton from '@/components/TabButton';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const  CestasPage = () => {
  const [activeTab, setActiveTab] = useState('Romance');

  const tabs = ['Romance', 'Família & Amigos', 'Datas Especiais'];

  // Mock de produtos (substitua por dados reais ou API)
  const products = [
    {
      title: 'Buquê de Rosas Vermelhas',
      price: 'R$ 89,90',
      rating: 4.5,
      image: '/images/buque-rosas.jpg',
    },
    {
      title: 'Cesta de Chocolates Premium',
      price: 'R$ 119,90',
      rating: 5,
      image: '/images/cesta-chocolates.jpg',
    },
    {
      title: 'Kit Spa Relaxante',
      price: 'R$ 159,90',
      rating: 4,
      image: '/images/kit-spa.jpg',
    },
    {
      title: 'Cesta Café da Manhã',
      price: 'R$ 129,90',
      rating: 5,
      image: '/images/cesta-cafe.jpg',
    },
    // Repete os produtos para exemplo
    ...Array(4).fill({
      title: 'Cesta Surpresa Romântica',
      price: 'R$ 139,90',
      rating: 4,
      image: '/images/cesta-romantica.jpg',
    }),
  ];

  // Exemplo de filtragem de produtos por aba (pode ajustar conforme categorias reais)
  const filteredProducts = products.filter((product) => {
    if (activeTab === 'Romance') return product.title.includes('Rosas') || product.title.includes('Romântica');
    if (activeTab === 'Família & Amigos') return product.title.includes('Café') || product.title.includes('Chocolates');
    if (activeTab === 'Datas Especiais') return product.title.includes('Kit');
    return true;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Header fixo */}
      <Header />

      {/* Conteúdo principal */}
      <main className="flex-grow px-4 pt-24 pb-8 sm:pt-28 sm:pb-12">
        {/* Título */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Cestas</h1>

        {/* Abas */}
        <div className="flex flex-wrap gap-2 mb-8">
          {tabs.map((tab) => (
            <TabButton
              key={tab}
              label={tab}
              isActive={activeTab === tab}
              onClick={() => setActiveTab(tab)}
            />
          ))}
        </div>

        {/* Grid de Produtos */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <ProductCard
                key={index}
                title={product.title}
                price={product.price}
                rating={Math.round(product.rating)}
                image={product.image}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 mt-10">Nenhum produto encontrado nesta categoria.</p>
        )}

        {/* Paginação (exemplo visual, ainda estática) */}
        <div className="flex justify-center mt-10 space-x-2">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`w-10 h-10 rounded-lg font-medium transition-colors ${
                page === 1
                  ? 'bg-red-900 text-white'
                  : 'bg-white text-gray-700 hover:bg-red-800 hover:text-white'
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CestasPage;
