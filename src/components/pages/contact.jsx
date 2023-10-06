import Accordion from "../faqs/faqs";
import ContactForm from "../form/form";
import Search from "../misc/search";

export default function ContactPage({ query, setQuery }) {
  return (
    <section className="flex flex-col gap-16">
      <h1 className="text-text text-2xl lg:text-5xl text-center">Contact</h1>
      <div className="flex flex-col">
        <ContactForm />
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-center text-text text-xl md:text-4xl">FAQs</h2>
        <Search
          query={query}
          setQuery={setQuery}
          placeholderText="Search FAQs..."
        />
        <Accordion />
      </div>
    </section>
  );
}
