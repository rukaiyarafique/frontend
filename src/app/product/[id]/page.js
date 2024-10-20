import Link from "next/link";
import PriceDetails from "./price_details";

async function getProductDetails(id) {
  const data = await fetch(`${process.env.backendserver}/product/${id}` + id);
  const details = await data.json();
  return details;
}

export default async function Product({ params }) {
  const details = await getProductDetails(params.id);
  return (
    <>
      <div>
        <h1>
          <Link href="/products">Go back to Product List</Link>
        </h1>
        <h2>Product details</h2>
        <PriceDetails details={details} />
      </div>
    </>
  );
}
