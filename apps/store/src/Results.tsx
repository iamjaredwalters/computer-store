import { Card } from "./Card";
import items from "./assets/items.json";

export const Results = () => {
  return (
    <div className="bg-[#FAFAFA]">
      <div className="max-w-container mx-auto px-4 2xl:max-w-container">
        <div className="py-8">
          <h1 className="text-5xl leading-[3.5rem] font-bold">Results</h1>
          <p className="text text-[#777] mt-2 [text-shadow:_0_4px_4px_rgba(0,_0,_0,_0.25)]">
            Showing 12 of 100
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-8 max-w-container mx-auto px-4 2xl:max-w-container bg-[#FAFAFA]">
        {items.map((item: any) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
