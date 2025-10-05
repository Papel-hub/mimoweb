// app/page.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona o usuário para a página de login
    router.replace("/login");
  }, [router]);

  return null;
}
