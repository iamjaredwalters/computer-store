export type Item = {
  vendor: string;
  title: string;
  price: string;
  image: string;
  "striked-price": string | null;
};

const Striked = ({ price }: { price: string }) => {
  return <span className="line-through text-sm text-[#9C9C9C]">{price}</span>;
};

const Price = ({ price, strike }: { price: string; strike: null | string }) => {
  if (!strike) {
    return <p className="py-3">{price}</p>;
  }
  return (
    <p className="py-3">
      <span className="text-[#FF6669]">{price}</span> <Striked price={strike} />
    </p>
  );
};

export const Card = ({ item }: { item: Item }) => {
  return (
    <div className="max-w-sm bg-white rounded-3xl shadow-[0_0_4px_0_rgba(0,0,0,0.1)] flex flex-col items-center p-[20px]">
      <div className="h-[132px] w-[132px]">
        <img
          className="object-contain max-h-[132px] rounded-t-lg"
          src={item.image}
          alt=""
        />
      </div>
      <div>
        <h5 className="mb-2 text-md font-bold text-[#363636]">{item.vendor}</h5>
        <div className="border-solid border-b-[1px] border-[#E8E8E8] mb-12">
          <p className="font-normal text-[#363636]">
            {item.title.substring(0, 60)}...
          </p>
          <Price price={item.price} strike={item["striked-price"]} />
        </div>
        <a
          href="#"
          className="inline-flex items-center justify-center px-3 py-2 text-sm uppercase font-medium text-center text-white w-full bg-[#1AB76C] rounded-full hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          View Deal
        </a>
      </div>
    </div>
  );
};
