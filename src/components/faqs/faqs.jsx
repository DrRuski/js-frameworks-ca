import { useState } from "react";
import { faqs } from "../../data/faqs";
import Search from "../misc/search";

export default function Accordion() {
  const [searchText, setSearchText] = useState("");
  const [curOpen, setIsOpen] = useState(null);
  const faqsList = faqs.filter((faq) =>
    faq.title.toLowerCase().includes(searchText)
  );
  return (
    <div className="flex flex-col gap-5">
      <div>
        <Search
          query={searchText}
          setQuery={setSearchText}
          placeholderText="Search FAQs..."
        />
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-text">
        {faqsList.map((faq, i) => (
          <FaqItem
            curOpen={curOpen}
            onOpen={setIsOpen}
            num={i}
            title={faq.title}
            key={i}
          >
            {faq.text}
          </FaqItem>
        ))}
      </div>
    </div>
  );
}

function FaqItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div
      className={`item shadow shadow-secondary rounded ${isOpen ? "open" : ""}`}
      onClick={handleToggle}
    >
      <p className="text-base md:text-xl number">
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p className="text-base md:text-2xl title">{title}</p>
      <p className="text-base md:text-2xl">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
