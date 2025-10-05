"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [currentView, setCurrentView] = useState("welcome"); // 'welcome', 'login', 'register'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const router = useRouter();

  const carouselImages = ["/images/1.svg", "/images/2.svg", "/images/3.svg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login simulado:", { email, password });
    router.push("/home");
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("As senhas não coincidem!");
      return;
    }
    console.log("Registro simulado:", { name, email, phone, password });
    router.push("/home");
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* LADO ESQUERDO - CARROSSEL (apenas em telas médias e maiores) */}
      <div className="hidden md:flex md:w-1/2 bg-red-900 flex-col items-center justify-center p-8 text-white relative overflow-hidden">
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
        <div className="relative w-3/4 h-1/2 max-w-xs max-h-64 rounded-full overflow-hidden shadow-xl mt-12">
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
                index === currentSlide ? "bg-red-800" : "bg-white"
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* LADO DIREITO - FORMULÁRIOS (sempre visível) */}
      <div className="w-full md:w-1/2 flex flex-col justify-center p-6 md:p-12 bg-white">
        <div className="max-w-md w-full mx-auto">
          {/* Logo pequena (apenas em mobile) */}
<div className="md:hidden mb-6 flex justify-center">
  <Image
    src="/images/logo.svg"
    alt="Mimo Meu e Seu"
    width={100}
    height={100}
    priority
  />
</div>
          {currentView === "welcome" && (
            <div className="space-y-6">
              <h1 className="text-2xl md:text-3xl  text-gray-900">
                Bem-vindo ao
              </h1>
              <p className="text-2xl md:text-3xl  font-bold text-red-900">
                Mimo meu e seu!
              </p>
              <p className="text-gray-600">
                Crie listas e cartões de presente inesquecíveis para{" "}
                <strong className="text-red-900">surpreender quem você ama!</strong>
              </p>

              <button
                onClick={() => setCurrentView("login")}
                className="mt-4 w-full bg-red-900 text-white font-medium py-3 px-4 rounded-full hover:bg-red-800 transition shadow-sm"
              >
                Entrar na sua conta
              </button>
              <button
                onClick={() => setCurrentView("register")}
                className="mt-2 w-full border border-red-900 text-red-900 font-medium py-3 px-4 rounded-full hover:bg-red-50 transition"
              >
                Criar uma conta
              </button>
            </div>
          )}

          {currentView === "login" && (
            <div className="space-y-6">
              <div className="flex flex-col gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                  Entre na sua conta
                </h2>
                <p className="text-gray-700">
                  Preencha os campos abaixo para entrar na sua conta
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite o email"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                </div>

                <div className="relative">
                  <Lock className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite a senha"
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3.5 text-gray-500 hover:text-red-900 focus:outline-none"
                    aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      className="mr-2 h-4 w-4 text-red-900 rounded focus:ring-red-500"
                    />
                    <span className="text-sm text-gray-700">Lembrar-me</span>
                  </label>
                  <Link href="/forgot-password" className="text-sm text-red-900 hover:underline">
                    Esqueci minha senha
                  </Link>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-900 text-white font-medium py-3 px-4 rounded-full hover:bg-red-800 transition shadow-sm"
                >
                  Entrar
                </button>

                <div className="flex items-center justify-center my-4">
                  <hr className="w-full border-gray-300" />
                  <span className="px-3 text-gray-500 text-sm">OU</span>
                  <hr className="w-full border-gray-300" />
                </div>

                <div className="flex justify-center gap-6">
                  {["google-logo.png", "apple-50.png", "facebook-new.png"].map((logo, i) => (
                    <button
                      key={i}
                      type="button"
                      className="py-2 px-3 rounded-full border border-gray-300 hover:bg-gray-100 transition"
                    >
                      <Image
                        src={`/images/${logo}`}
                        alt={`Login com ${["Google", "Apple", "Facebook"][i]}`}
                        width={25}
                        height={25}
                        priority
                      />
                    </button>
                  ))}
                </div>
              </form>
            </div>
          )}

{currentView === "register" && (
  <div className="space-y-6">
    <div className="flex flex-col gap-2">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900">
        Crie sua conta
      </h2>
      <p className="text-gray-700">
        Preencha os campos abaixo para criar uma conta
      </p>
    </div>

    <form onSubmit={handleRegister} className="space-y-4">
      {/* Nome */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nome completo
        </label>
        <div className="relative">
          <User className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Seu nome completo"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
        </div>
      </div>

      {/* Telefone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefone 
        </label>
        <div className="relative">
          <Phone className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(00) 00000-0000"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Senha */}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
          Senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-red-900"
            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Confirmar Senha */}
      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
          Confirmar senha
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-3.5 h-5 w-5 text-red-900" />
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-3.5 text-gray-500 hover:text-red-900"
            aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
          >
            {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-red-900 text-white font-medium py-3 px-4 rounded-full hover:bg-red-800 transition shadow-sm"
      >
        Criar conta
      </button>
    </form>
  </div>
)}
        </div>
      </div>
      </div>
  );
}