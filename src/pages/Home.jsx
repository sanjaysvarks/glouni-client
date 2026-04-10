import { Link } from "react-router-dom";

export function Home() {
  return (
    <section className="text-center p-10 bg-gray-100">
      <h2 className="text-3xl font-bold">Garment Manufacturer & Exporter</h2>
      <p className="mt-2">Bulk hoodies & t-shirts for global markets</p>
      <Link to="/contact" className="mt-4 inline-block bg-black text-white px-4 py-2">
        Send Enquiry
      </Link>
    </section>
  );
}

export default Home;