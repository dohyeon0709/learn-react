import { useState } from "react";

export default function AccordionItem({
    index,
    question,
    answer,
    isOpen = true,
    activeIndex,
    onlyOneOpen,
}) {
    const [open, setOpen] = useState(isOpen);
    const actualOpen = onlyOneOpen ? isOpen : open;

    const handleAccordionControl = () => {
        if (onlyOneOpen) {
            activeIndex(index);
        } else {
            setOpen(!open);
        }
    };

    return (
        <div className="flex flex-col mb-4">
            <dt className="flex items-center">
                {question}
                <button
                    type="button"
                    className="ml-4 cursor-pointer bg-amber-400 px-2 py-1 rounded"
                    onClick={handleAccordionControl}>
                    {actualOpen ? "닫기" : "열기"}
                </button>
            </dt>
            <dd className={actualOpen ? "" : "hidden"}>{answer}</dd>
        </div>
    );
}
