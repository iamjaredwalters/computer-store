import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";
import { Results } from "./Results";
import { Search } from "./Search";

export type Product = {
  title: string;
  price: string;
  vendor: string;
  strikedPrice: string;
  image: string;
};

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 250);
  const [error, setError] = useState(false);
  const fetchProducts = async (
    query: string,
    page: number
  ): Promise<{ products: Product[]; count: number }> => {
    const res = await fetch(
      `http://localhost:3000/products?query=${query}&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        return data;
      })
      .catch((error) => console.error(error));

    return res;
  };

  const getNextPage = async () => {
    // get the next page of products
    const { products: newProducts } = await fetchProducts(
      debouncedQuery,
      currentPage + 1
    );
    setProducts([...products, ...newProducts]);
    setCurrentPage(currentPage + 1);
  };

  // When a query changes attempt to fetch the first page of products
  useEffect(() => {
    if (debouncedQuery.trim().length > 0) {
      const FIRST_PAGE = 0;
      fetchProducts(debouncedQuery, FIRST_PAGE)
        .then((data) => {
          setProducts(data.products);
          setTotal(data.count);
          setCurrentPage(FIRST_PAGE);
        })
        .catch(() => {
          console.error(error);
          setError(true);
        });
    } else {
      // Reset state when query is empty
      setProducts([]);
      setTotal(0);
    }
  }, [debouncedQuery, setProducts]);

  return (
    <>
      <Search query={query} setQuery={setQuery} />
      {error ? (
        <div className="text-red-500 w-full flex justify-center items-center">
          There was an error fetching products. Please refresh the page and try
          again.
        </div>
      ) : (
        <Results products={products} total={total} showMore={getNextPage} />
      )}
    </>
  );
}

export default App;
