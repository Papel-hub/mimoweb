"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function ForgotPasswordPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-md rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-3">
          Esqueceu sua senha?
        </h1>
        <p className="text-gray-600 mb-6">
          Digite o e-mail associado à sua conta e enviaremos um link para redefinir sua senha.
        </p>

        <form  className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="exemplo@dominio.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
              required
            />
          </div>

          {message && (
            <p className="text-green-600 text-sm bg-green-50 border border-green-200 rounded-md p-2">
              {message}
            </p>
          )}
          {error && (
            <p className="text-red-600 text-sm bg-red-50 border border-red-200 rounded-md p-2">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-2 rounded-lg text-white font-semibold transition ${
              loading
                ? "bg-red-700 cursor-not-allowed opacity-80"
                : "bg-red-900 hover:bg-red-800"
            }`}
          >
            {loading ? "Enviando..." : "Enviar link"}
          </button>
        </form>

        <button
          onClick={() => router.push("/login")}
          className="mt-4 text-sm text-red-700 hover:underline"
        >
          Voltar ao login
        </button>
      </div>
    </div>
  );
}
