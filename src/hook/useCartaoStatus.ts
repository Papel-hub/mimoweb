import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export const useCartaoStatus = () => {
  // SWR vai buscar o status do cartão na API
  const { data, error, isLoading } = useSWR('/api/user/cartao', fetcher);

  return {
    hasCartao: data?.hasCartao ?? false,
    loading: isLoading,
    error,
  };
};
