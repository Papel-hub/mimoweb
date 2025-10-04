// app/page.js
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  // Opcional: exibir uma mensagem enquanto redireciona
  return <div>Redirecionando para o login...</div>;
}