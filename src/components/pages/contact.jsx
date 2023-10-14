import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Accordion from "../faqs/faqs";
import ContactForm from "../form/form";

export default function ContactPage({ query, setQuery }) {
  const location = useLocation();
  document.title = "Contact Us";
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-text text-2xl lg:text-5xl text-center">Contact</h1>
      <div className="flex flex-col">
        <ContactForm />
      </div>
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-text text-xl md:text-4xl">FAQs</h2>
        <Accordion query={query} setQuery={setQuery} />
      </div>
    </section>
  );
}
