import Link from "@components/ui/link";
import Image from "next/image";
import { ROUTES } from "@utils/routes";
import { useTranslation } from "next-i18next";

const ProductCard = ({ product }: any) => {
  const { t } = useTranslation("common");

  const { handle, title } = product.node;

  const { originalSrc } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link legacyBehavior href={`${ROUTES.PRODUCT}/${handle}`}>
      <div className="group cursor-pointer ">
        <div className="w-full max-w-sm bg-white border border-gray-300 rounded-lg shadow-listProduct xl:border-gray-200">
          <Image
            className="p-3 rounded-t-lg"
            src={originalSrc}
            alt={title}
            width={700}
            height={700}
          />
          <div className="px-5 pb-5">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-5 ">
              {title}{" "}
            </h5>

            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">
                {t("text-currency")} {price}
              </span>
              <button className="text-white bg-[#262626] hover:bg-gray-800  font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                View Details{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
