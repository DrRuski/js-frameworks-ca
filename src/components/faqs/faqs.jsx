import { useState } from "react";
import { faqs } from "../../data/faqs";

export default function Accordion() {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-text">
      {faqs.map((faq, i) => (
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
