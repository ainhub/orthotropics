"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductProps {
  image: string;
  imageAlt: string;
  title: string;
  inStock: boolean;
  sizes?: string[];
  currency: string;
  price1: number;
  price2?: number;
  productId: string;
  slug: string;
}

const ProductCard = ({
  image,
  imageAlt,
  title,
  inStock,
  sizes,
  currency,
  price1,
  price2,
  productId,
  slug,
}: ProductProps) => {
  const [selectedPrice, setSelectedPrice] = useState<number>(price1);

  const handleLocationChange = (event: React.FormEvent<HTMLSelectElement>) => {
    if (price2) {
      if (event.currentTarget.value === "Outside the EU") {
        setSelectedPrice(price2);
      } else {
        setSelectedPrice(price1);
      }
    }
  };

  return productId === "SPANISH_CAUSE_AND_CURE" ? (
    <form
      target="paypal"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      className="group relative block overflow-hidden flex flex-col"
    >
      <Link href={`/shop-item/${slug}`} className="block h-80 w-full sm:h-72">
        <Image
          width={600}
          height={800}
          alt={imageAlt}
          src={image}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="relative bg-white p-6 flex flex-col gap-4 flex-1">
        {!inStock && (
          <span className="whitespace-nowrap bg-brand-yellow-200 text-brand-dark-100 px-3 py-1.5 text-xs font-medium max-w-max">
            Out of stock
          </span>
        )}

        <div className="w-full flex flex-col gap-4 flex-1">
          <Link href={`/shop-item/${slug}`}>
            <h3 className="text-2xl font-semibold text-brand-lightGreen-100 line-clamp-3 !my-0">
              {title}
            </h3>
          </Link>
          <input type="hidden" name="cmd" value="_cart" />
          <input
            type="hidden"
            name="business"
            value="accounts@orthotropics.co.uk"
          />
          <input type="hidden" name="lc" value="US" />
          <input
            type="hidden"
            name="item_name"
            value="The Cause and Cure of Malocclusion by Prof. John Mew (Spanish edition)"
          />
          <input type="hidden" name="button_subtype" value="products" />
          <input type="hidden" name="no_note" value="0" />
          <input type="hidden" name="currency_code" value="GBP" />
          <input type="hidden" name="add" value="1" />
          <input
            type="hidden"
            name="bn"
            value="PP-ShopCartBF:btn_cart_LG.gif:NonHostedGuest"
          />
          <table>
            <tbody>
              <tr>
                <td>
                  <input type="hidden" name="on0" value="Shipping Info" />
                  Shipping Info
                </td>
              </tr>
              <tr>
                <td>
                  <div className="relative max-w-max">
                    <select
                      name="os0"
                      className="appearance-none focus:outline-1 focus:outline-brand-lightGreen-100 border focus:border-brand-lightGreen-100 row-start-1 col-start-1 rounded bg-white hover:bg-white border-slate-300 text-slate-700 py-1.5 pr-6 pl-2 w-full"
                    >
                      <option value="Inside the EU">
                        Inside the EU £97.00 GBP
                      </option>
                      <option value="Outside the EU">
                        Outside the EU £107.00 GBP
                      </option>
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-700 material-symbols-outlined pointer-events-none">
                      keyboard_arrow_down
                    </span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <input type="hidden" name="option_select0" value="Inside the EU" />
          <input type="hidden" name="option_amount0" value={price1} />
          <input type="hidden" name="option_select1" value="Outside the EU" />
          <input type="hidden" name="option_amount1" value={price2} />
          <input type="hidden" name="option_index" value="0" />
        </div>

        {inStock && (
          <button
            type="submit"
            className="block w-full rounded bg-brand-lightGreen-100 p-4 text-sm text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        )}
      </div>
    </form>
  ) : (
    <form
      className="group relative block overflow-hidden flex flex-col"
      target="paypal"
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      title={title}
    >
      <Link href={`/shop-item/${slug}`} className="block h-80 w-full sm:h-72">
        <Image
          width={600}
          height={800}
          alt={imageAlt}
          src={image}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </Link>
      <div className="relative bg-white p-6 flex flex-col gap-4 flex-1">
        {!inStock && (
          <span className="whitespace-nowrap bg-brand-yellow-200 text-brand-dark-100 px-3 py-1.5 text-xs font-medium max-w-max">
            Out of stock
          </span>
        )}

        <div className="w-full flex flex-col gap-4 flex-1">
          <Link href={`/shop-item/${slug}`}>
            <h3 className="text-2xl font-semibold text-brand-lightGreen-100 line-clamp-3">
              {title}
            </h3>
          </Link>
          <p className="text-xl text-neutral-800 font-medium">
            {currency}
            {selectedPrice}
          </p>
          {inStock && price2 && (
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`loc-${slug}`}
                className="text-sm text-brand-lightGreen-100 font-semibold"
              >
                Shipping Info
              </label>
              <div className="relative max-w-max">
                <select
                  onChange={handleLocationChange}
                  id={`loc-${slug}`}
                  name="os0"
                  className="appearance-none focus:outline-1 focus:outline-brand-lightGreen-100 border focus:border-brand-lightGreen-100 row-start-1 col-start-1 rounded bg-white hover:bg-white border-slate-300 text-slate-700 py-1.5 pr-6 pl-2 w-full"
                >
                  <option value="Within the EU">Within the EU</option>
                  <option value="Outside the EU">Outside the EU</option>
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-700 material-symbols-outlined pointer-events-none">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
          )}
          {inStock && sizes && (
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor={`size-${slug}`}
                className="text-sm text-brand-lightGreen-100 font-semibold"
              >
                Sizes
              </label>
              <div className="relative max-w-max">
                <select
                  id={`size-${slug}`}
                  name="os1"
                  className="appearance-none focus:outline-1 focus:outline-brand-lightGreen-100 border focus:border-brand-lightGreen-100 row-start-1 col-start-1 rounded bg-white hover:bg-white border-slate-300 text-slate-700 py-1.5 pr-6 pl-2 w-full"
                >
                  {sizes.map((size: string, index: number) => (
                    <option key={index} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-slate-700 material-symbols-outlined pointer-events-none">
                  keyboard_arrow_down
                </span>
              </div>
            </div>
          )}
        </div>

        {inStock && (
          <button
            type="submit"
            className="block w-full rounded bg-brand-lightGreen-100 p-4 text-sm text-white transition hover:scale-105"
          >
            Buy Now
          </button>
        )}
      </div>
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value={productId} />
      <input type="hidden" name="on0" value="Shipping Info" />
    </form>
  );
};

export default ProductCard;
