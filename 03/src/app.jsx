import AccordionItem from "./components/accordion/accordion-item";
import AccordionList from "./components/accordion/accordion-list";

export default function App() {
    return (
        <section>
            <h1 className="sr-only">랜덤 카운트 업</h1>
            <AccordionList />
            <br />
            <hr />
            <br />
            <AccordionList onlyOneOpen />
        </section>
    );
}
