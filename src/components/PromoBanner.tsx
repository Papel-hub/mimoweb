
import Link from "next/link";
import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="relative w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[490px] xl:h-[510px] rounded-2xl overflow-hidden mb-8">
      {/* Imagem de fundo */}
      <Image
        src="/images/s1.svg"
        alt="Promoção Dia dos Namorados"
        fill
        className="object-cover object-center"
        priority
      />

      {/* Camada de sobreposição */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white max-w-xl">

          <Link
            href="/cestas"
            className="inline-block bg-white text-red-900 px-5 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-gray-100 transition duration-200 shadow-md"
          >
            Compre Agora
          </Link>
        </div>
      </div>
    </section>
  );
}
