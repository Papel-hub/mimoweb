'use client';

import Link from 'next/link';
import Image from 'next/image';
import {

  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

// Componente de Produto
const ProductCard = ({ image, title }: { image: string; title: string }) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="font-medium text-gray-800">{title}</h3>
        <p className="text-red-900 font-bold mt-1">R$ 129,90</p>
      </div>
    </div>
  );
};

// Componente de Banner (simples, sem slider por enquanto)
const PromoBanner = () => {
  return (
    <div className="relative w-full h-[300px] md:h-[400px] rounded-xl mb-8 overflow-hidden">
      <img
        src="https://via.placeholder.com/1200x400/DC143C/FFFFFF?text=DIA+DOS+NAMORADOS+-+50%25+OFF"
        alt="Promoção Dia dos Namorados"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
        <div className="text-white text-center p-4 max-w-xl">
          <h2 className="text-2xl md:text-4xl font-bold mb-2">Dia dos Namorados</h2>
          <p className="text-lg mb-4">50% OFF em cestas românticas</p>
          <Link
            href="/cestas"
            className="bg-white text-red-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition"
          >
            Compre Agora
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header da loja */}
      <header className="bg-red-900 text-white shadow-md top-0 left-0 
       items-center px-6 py-4 ">
          <div className="flex items-center space-x-6">
            <Link href="/home" className="block">
              <Image
                src="/images/logopc.svg"
                alt="Mimo Meu e Seu"
                width={120}
                height={60}
                priority
              />
            </Link>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/home" className="hover:underline">Home</Link>
              <Link href="/datas" className="hover:underline">Datas</Link>
              <Link href="/cestas" className="hover:underline">Cestas</Link>
              <Link href="/promocoes" className="hover:underline">Promoções</Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center rounded-full space-x-2">
              <img
                src="https://www.gravatar.com/avatar/?d=mp&s=100"
                alt="Avatar"
                className="rounded-full w-10 h-10"
              />
              <span className="text-sm hidden sm:inline">Olá, NOME</span>
            </div>
            <button className="bg-white  h-10 text-red-900 px-3 py-1.5 text-sm font-medium rounded-full hover:bg-gray-100 whitespace-nowrap">
              Criar Cesta
            </button>
            {/* Carrinho */}
            <Link
              href="/carrinho"
              className="p-2 border border-white rounded-full hover:bg-red-800 transition-colors relative"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-white text-red-900 text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                4
              </span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Banner Promocional */}
        <PromoBanner />

        {/* Sugestões para você */}
        <section>
          <h2 className="text-xl font-bold mb-6">Sugestões para você:</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(8)].map((_, i) => (
              <ProductCard
                key={i}
                image={`https://via.placeholder.com/300/FF69B4/FFFFFF?text=Cesta+Romântica+${i + 1}`}
                title="Cesta Romântica"
              />
            ))}
          </div>
        </section>

        <div className="mt-8 text-center">
          <button className="text-red-900 hover:underline font-medium">
            Ver mais →
          </button>
        </div>
      </main>

 {/* Footer */}
<footer className="bg-red-900 text-white py-4 mt-12">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-sm gap-4">
    <p>Mimo Meu e Seu | Copyright © 2025</p>
    <div className="flex space-x-4">
      <a href="#" className="hover:text-gray-300"><FaFacebook className="w-5 h-5" /></a>
      <a href="#" className="hover:text-gray-300"><FaInstagram className="w-5 h-5" />
</a>
      
    </div>
  </div>
</footer>
    </div>
  );
}