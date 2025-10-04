// app/login/page.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);

  const carouselImages = [
    "/images/1.svg",
    "/images/2.png",
    "/images/3.png",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      {/* LADO ESQUERDO - CARROSSEL */}
      <div className="w-1/2 bg-red-900 flex flex-col items-center justify-center p-8 text-white relative overflow-hidden">
        {/* Logo */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/images/logopc.svg"
            alt="Mimo Meu e Seu"
            width={180}
            height={60}
            priority
          />
        </div>

        {/* Carrossel de Imagens */}
        <div className="relative w-1/2  h-1/2 rounded-full overflow-hidden shadow-xl mt-12">
          {carouselImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <Image
                src={img}
                alt={`Imagem ${index + 1}`}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Indicadores */}
        <div className="absolute bottom-8 flex space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ?"bg-red-800": "bg-white"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* LADO DIREITO - FORMULÁRIO */}
      <div className="w-1/2 flex flex-col justify-center p-12 bg-white">
        <div className="absolute  transform -translate-x-1/2 z-10">
          <Image
            src="/images/bm.svg"
            alt="Bem vindo"
            width={180}
            height={180}
            priority
          />
        </div>
        <p className="text-gray-600 mb-8 max-w-md">
          Crie listas e cartões de presente inesquecíveis para{" "}
          <strong>surpreender quem você ama!</strong>
        </p>

        <button
          onClick={() => alert("Login clicado")}
          className="mt-4 mb-2 w-full bg-red-900 text-white font-medium py-3 px-4 rounded-full hover:bg-red-800 transition shadow-sm"
        >
          Entrar na sua conta
        </button>
        <button
          onClick={() => alert("Cadastro clicado")}
          className="mt-2 w-full border border-red-900 text-red-900 font-medium py-3 px-4 rounded-full hover:bg-red-50 transition"
        >
          Criar uma conta
        </button>
      </div>
    </div>
  );
}