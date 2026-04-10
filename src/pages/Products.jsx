import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Hoodie", desc: "280 GSM Cotton, Bulk Orders" },
  { id: 2, name: "T-Shirt", desc: "180 GSM Cotton, Bio-washed" },
];

export function Products() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-2 gap-4">
        {products.map((p) => (
          <div key={p.id} className="border p-4">
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-sm">{p.desc}</p>
            <p className="text-sm">MOQ: 500 pcs</p>
            <Link to="/contact" className="mt-2 inline-block bg-black text-white px-3 py-1">
              Request Quote
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;