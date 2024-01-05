import clsx from "clsx";
import { Testimony } from "../types";

const TestimonyBlock = ({ aspect, text }: Testimony) => {
  return (
    <div className={clsx("flex flex-col rounded-lg bg-divider")}>
      <header className={clsx("rounded-lg px-4 py-2 font-semibold", aspect === 'Factual' ? 'bg-fact' : 'bg-legal')}>
        {aspect} Aspects
      </header>

      <div className="px-4 py-2">
        {text}
      </div>
    </div>
  )
}

export default TestimonyBlock;
