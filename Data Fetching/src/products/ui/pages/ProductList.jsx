import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../../api/api";

function ProductSkeleton() {
  return (
    <div
      className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      aria-label="Loading products"
    >
      {Array.from({ length: 8 }, (_, index) => (
        <div className="animate-pulse" key={index}>
          <div className="aspect-[4/5] bg-stone-200" />
          <div className="mt-5 h-3 w-20 bg-stone-200" />
          <div className="mt-3 h-5 w-3/4 bg-stone-200" />
          <div className="mt-3 h-4 w-16 bg-stone-200" />
        </div>
      ))}
    </div>
  );
}

function ProductList() {
  console.log("ProductList rendered");
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 30 * 60 * 1000,
  });

  return (
    <main className="min-h-screen bg-[#f7f6f2] text-[#24251f]">
      <header className="border-b border-stone-300/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 sm:px-8">
          <a
            className="font-serif text-xl tracking-[0.12em]"
            href="#top"
            aria-label="Atelier home"
          >
            ATELIER
          </a>
          <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-stone-500">
            Objects for everyday
          </span>
        </div>
      </header>

      <section id="top" className="mx-auto  px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="mb-10 flex flex-col justify-between gap-5 border-b border-stone-300 pb-7 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.25em] text-[#8a6749]">
              The considered collection
            </p>
            <h1 className="font-serif text-4xl leading-tight sm:text-5xl">
              Pieces to keep close.
            </h1>
          </div>
          <p className="max-w-xs text-sm leading-6 text-stone-500">
            Thoughtful essentials, selected for the rhythm of everyday life.
          </p>
        </div>

        {isLoading && <ProductSkeleton />}

        {isError && (
          <div
            className="flex min-h-72 flex-col items-center justify-center border border-stone-300 px-6 text-center"
            role="alert"
          >
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8a6749]">
              A little interruption
            </p>
            <h2 className="mt-3 font-serif text-3xl">
              We couldn’t load the collection.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-stone-500">
              {error.message || "Please check your connection and try again."}
            </p>
            <button
              className="mt-7 border border-[#24251f] px-6 py-3 text-[10px] font-medium uppercase tracking-[0.18em] transition-colors hover:bg-[#24251f] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8a6749]"
              onClick={() => refetch()}
              type="button"
            >
              Try again
            </button>
          </div>
        )}

        {!isLoading && !isError && data?.length === 0 && (
          <p className="py-20 text-center font-serif text-2xl text-stone-500">
            The collection is being refreshed.
          </p>
        )}

        {!isLoading && !isError && data?.length > 0 && (
          <div className="grid grid-cols-1 gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((product) => (
              <article className="group" key={product.id}>
                <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-[#eeece6] p-8">
                  <img
                    alt={product.title}
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    src={product.image}
                  />
                  <span className="absolute left-4 top-4 bg-[#f7f6f2] px-3 py-1.5 text-[9px] font-medium uppercase tracking-[0.16em] text-stone-600">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-start justify-between gap-4 pt-4">
                  <div>
                    <h2 className="font-serif text-lg leading-snug">
                      {product.title}
                    </h2>
                    <p className="mt-2 text-xs text-stone-500">
                      {product.rating?.rate ?? "New"}
                      {product.rating?.rate && (
                        <span> / 5 · {product.rating.count} reviews</span>
                      )}
                    </p>
                  </div>
                  <p className="shrink-0 pt-1 text-sm">
                    ₹{Number(product.price).toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default ProductList;
