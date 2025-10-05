import Link from 'next/link';
import Image from 'next/image';

// Tipagem das props (opcional, mas recomendado em TypeScript)
interface ProductCardProps {
  image: string;
  title: string;

}

export default function ProductCard({ image, title }: ProductCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-800 line-clamp-1">{title}</h3>
      </div>
    </div>
  );
}