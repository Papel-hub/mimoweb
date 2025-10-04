// src/app/login/forgot-password/page.tsx
export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Esqueci minha senha</h1>
        <p className="text-gray-600 mb-6">
          Digite seu e-mail e enviaremos um link para redefinir sua senha.
        </p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder="Seu e-mail"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
            required
          />
          <button
            type="submit"
            className="w-full bg-red-900 text-white py-2 rounded-lg hover:bg-red-800 transition"
          >
            Enviar link
          </button>
        </form>
      </div>
    </div>
  );
}