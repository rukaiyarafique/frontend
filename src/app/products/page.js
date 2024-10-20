import Link from "next/link";

async function getProducts() {
  const productlist = await fetch(`${process.env.backendserver}/productlist`, {
    cache: "no-store",
  });
  const data = await productlist.json();
  return data;
}

export default async function Products() {
  const productlist = await getProducts();
  return (
    <>
      <div>
        <h1>Product List</h1>
        {productlist.map((product) => {
          return (
            <div>
              <Link key={product.id} href={`/product/${product.id}`}>
                {product.id}
              </Link>
              <Link key={product.id} href={`/product/${product.id}`}>
                {product.name}
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
