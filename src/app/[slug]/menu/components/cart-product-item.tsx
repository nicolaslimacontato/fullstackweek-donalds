import { ChevronLeftIcon, ChevronRightIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/helpers/format-currency";

import { CartProduct } from "../contexts/cart";

interface CartProductItemProps {
  product: CartProduct;
}

const CartProductItem = ({ product }: CartProductItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* Esquerda */}
      <div className="flex items-center gap-3">
        <div className="relative h-20 w-20 bg-gray-100 rounded-lg">
          <Image src={product.imgUrl} alt={product.name} fill />
        </div>
        <div className="space-y-1">
          <p className="max-w-[90%] truncate text-ellipsis text-xs">
            {product.name}
          </p>
          <p className="text-sm font-semibold">
            {formatCurrency(product.price)}
          </p>
          {/* quantidade */}
          <div className="flex items-center gap-1 text-center">
            <Button className="w-7 h-7 rounded-xl" variant="outline">
              <ChevronLeftIcon size={16} />
            </Button>
            <p className="w-7 text-sm">{product.quantity}</p>
            <Button className="w-7 h-7 rounded-xl" variant="destructive">
              <ChevronRightIcon size={16} />
            </Button>
          </div>
        </div>
      </div>
      <Button className="h-7 w-7 rounded-lg" variant="outline">
        <TrashIcon />
      </Button>
    </div>
  );
};

export default CartProductItem;
