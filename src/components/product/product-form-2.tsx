import { useState, useContext } from "react";
import { CartContext } from "@contexts/shopContext";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function ProductForm2({ product }: any) {
  const { addToCart }: any = useContext(CartContext);
  const { t } = useTranslation("common");
  const router = useRouter();
  const locale = router.locale;

  var className = "";
  var className2 = "";
  var className3 = "";
  if (locale == "uk") {
    className3 = "block";
  } else {
    className3 = "hidden";
  }
  if (product.totalInventory < 1) {
    className = "hidden";
    className2 = "block";
  } else {
    className2 = "hidden";
    className = "block";
  }

  const allVariantOptions = product.variants.edges?.map((variant: any) => {
    const allOptions: any = {};

    variant.node.selectedOptions.map((item: any) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues: any = {};
  product.options.map((item: any) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name: any, value: any) {
    setSelectedOptions((prevState: any) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item: any) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="flex flex-col md:ml-6 sm:w-full md:w-[36rem]">
      <div className="col-span-4 pt-8 lg:pt-0">
        <div className="pb-7 mb-7 border-b border-gray-300">
          <h2 className="text-[#262626] text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-bold hover:text-black mb-3.5">
            {product.title}
          </h2>
          <p className="text-body text-sm lg:text-base leading-6 lg:leading-8">
            {`Unlock your artistic potential with our exceptional ${product?.productType}. Designed to inspire and empower artists of all skill levels, this comprehensive product line encompasses a wide range of art supplies that cater to every creative endeavor.`}
          </p>
          <div className="flex items-center mt-5">
            <div className="text-[#262626] font-bold text-base md:text-xl lg:text-2xl 2xl:text-4xl pe-2 md:pe-0 lg:pe-2 2xl:pe-0">
              {t("text-currency")}
              {product.variants.edges[0].node.priceV2.amount}{" "}
            </div>
          </div>
        </div>
        <div className="text-4xl text-yellow-400">
          {" "}
          ★★★★ <span className="text-gray-500 text-base">(4.0)</span>
        </div>

        <div className="flex items-center space-s-4 md:pe-32 lg:pe-12 2xl:pe-32 3xl:pe-48 border-b border-gray-300 py-8">
          {/* <Counter
						quantity={quantity}
						onIncrement={() => setQuantity((prev) => prev + 1)}
						onDecrement={() =>
							setQuantity((prev) => (prev !== 1 ? prev - 1 : 1))
						}
						disableDecrement={quantity === 1}
					/> */}
          <button
            onClick={() => {
              addToCart(selectedVariant);
              console.log(selectedVariant);
            }}
            className={`bg-black rounded-lg text-white px-6 py-3 mt-3 hover:bg-gray-800 ${className} `}
          >
            Add To Cart
          </button>
          <button
            className={`bg-black rounded-lg text-white px-2 py-3 mt-3 ${className2} `}
          >
            Out of Stock{" "}
          </button>
          <button
            className={`bg-black rounded-lg text-white px-2 py-3 mt-[14px] hover:bg-gray-800 ${className3}`}
          >
            <a href="https://www.amazon.co.uk/PAINTIGO-Acrylic-Painting-Ceramic-Supplies/dp/B09S2JQMJZ?maas=maas_adg_D02BC4919C61519E3F13F81C3D243AAB_afap_abs&ref_=aa_maas&tag=maas">
              {" "}
              Buy from Amazon{" "}
            </a>
          </button>
        </div>
        <div className="py-6">
          <ul className="text-sm space-y-5 pb-1">
            <li>
              <span className="font-semibold text-black inline-block pe-2">
                Available:
              </span>
              {product?.totalInventory}
            </li>
            <li>
              <span className="font-semibold text-black inline-block pe-2">
                Product Type:
              </span>

              {product.productType}
            </li>
            <div className="flex flex-row my-7">
              {" "}
              <a
                href={`//www.facebook.com/sharer.php?u=https://paintigo.shop/products/${product.handle}`}
              >
                <FaFacebook className="text-3xl text-blue-700 mr-2" />
              </a>
              <a
                href={`//twitter.com/share?text=${product.title}&url=https://paintigo.shop/products/${product.handle}`}
              >
                <FaTwitter className="text-3xl text-blue-400 mx-2" />
              </a>
              <a
                href={`//pinterest.com/pin/create/button/?url=https://paintigo.shop/products/${product.handle}&description=${product.title}`}
              >
                <FaPinterest className="text-3xl text-red-600 mx-2" />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );

  {
    /* <div className="">
        <h2 className="text-3xl font-normal font-razor mt-2">
          {product.title}
        </h2>
        <div className="flex flex-row my-7">
          {" "}
          <a
            href={`//www.facebook.com/sharer.php?u=https://paintigo.shop/products/${product.handle}`}
          >
            <FaFacebook className="text-3xl text-blue-700 mr-2" />
          </a>
          <a
            href={`//twitter.com/share?text=${product.title}&url=https://paintigo.shop/products/${product.handle}`}
          >
            <FaTwitter className="text-3xl text-blue-400 mx-2" />
          </a>
          <a
            href={`//pinterest.com/pin/create/button/?url=https://paintigo.shop/products/${product.handle}&description=${product.title}`}
          >
            <FaPinterest className="text-3xl text-red-600 mx-2" />
          </a>
        </div>
        <span className=" my-7 text-xl font-semibold">
          {t("text-currency")}

          {product.variants.edges[0].node.priceV2.amount}
        </span>
        <div className={" my-7 text-xl font-semibold "}>
          {`Available: ${product.totalInventory}`}
        </div>
        {product.options.map(({ name, values }: any) => (
          <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
          />
        ))}
        <div className="flex flex-col my-14">
          <button
            onClick={() => {
              addToCart(selectedVariant);
            }}
            className={`bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800 ${className} `}
          >
            Add To Cart
          </button>
          <button
            className={`bg-black rounded-lg text-white px-2 py-3 mt-3 ${className2} `}
          >
            Out of Stock{" "}
          </button>
          <button className="bg-black rounded-lg text-white px-2 py-3 mt-[14px] hover:bg-gray-800 ">
            <a href="https://www.amazon.co.uk/PAINTIGO-Acrylic-Painting-Ceramic-Supplies/dp/B09S2JQMJZ?maas=maas_adg_D02BC4919C61519E3F13F81C3D243AAB_afap_abs&ref_=aa_maas&tag=maas">
              {" "}
              Buy from Amazon{" "}
            </a>
          </button>
        </div>
      </div> */
  }
}
