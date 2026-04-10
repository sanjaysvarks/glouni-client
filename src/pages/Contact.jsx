export function Contact() {
  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold">Bulk Enquiry</h2>
      <form className="flex flex-col space-y-2 max-w-md">
        <input placeholder="Name" className="border p-2" />
        <input placeholder="Email" className="border p-2" />
        <input placeholder="Phone" className="border p-2" />
        <textarea placeholder="Requirement" className="border p-2" />
        <a href="https://wa.me/91XXXXXXXXXX" className="bg-green-600 text-white p-2 text-center">
          Chat on WhatsApp
        </a>
      </form>
    </section>
  );
}
 export default Contact;