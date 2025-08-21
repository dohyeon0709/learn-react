import { useState } from "react";
import AccordionItem from "./accordion-item";
import accordionData from "./data.json";

export default function AccordionList({ onlyOneOpen = false }) {
    const [getIndex, setGetIndex] = useState(0);
    const handleActive = (nowActive) => setGetIndex(nowActive);

    return (
        <dl>
            {accordionData.map((accordionItem, index) => (
                <AccordionItem
                    key={accordionItem.id}
                    question={accordionItem.question}
                    answer={accordionItem.answer}
                    isOpen={getIndex === index}
                    index={index}
                    activeIndex={handleActive}
                    onlyOneOpen={onlyOneOpen}
                />
            ))}
        </dl>
    );
}
