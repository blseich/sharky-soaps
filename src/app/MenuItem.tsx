type MenuItemProps = {
    name: string,
    price: number,
    quantity?: number,
};

export const MenuItem = ({ name, price, quantity }: MenuItemProps) => (
    <div className="w-full flex text-2xl">
        <div className="flex-auto uppercase">{name}</div>
        <div className="flex-initial">{quantity ? `${quantity}/` : ''}${price}</div>
    </div>
);