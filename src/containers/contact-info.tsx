import { FC } from "react";
import { IoLocationSharp, IoMail, IoCallSharp } from "react-icons/io5";
import Link from "@components/ui/link";
import { useTranslation } from "next-i18next";
const data = [
  {
    id: 1,
    slug: "#",
    icon: <IoLocationSharp />,
    name: "text-address",
    description: "text-address-details",
  },
  {
    id: 2,
    slug: "mailto:shop@paintigo.com",
    icon: <IoMail />,
    name: "text-email",
    description: "text-email-details",
  },
  {
    id: 3,
    slug: "tel:+ 44 20 8004 6776",
    icon: <IoCallSharp />,
    name: "text-phone",
    description: "text-phone-details",
  },
];
interface Props {
  image?: HTMLImageElement;
}
const ContactInfoBlock: FC<Props> = () => {
  const { t } = useTranslation("common");
  return (
    <div className="mb-6 lg:border lg:rounded-md border-gray-300 lg:p-7">
      <h4 className="text-2xl md:text-lg font-bold text-[#262626] pb-7 md:pb-10 lg:pb-6 -mt-1">
        {t("text-find-us-here")}
      </h4>
      {data?.map((item: any) => (
        <div key={`contact--key${item.id}`} className="flex pb-7">
          <div className="flex flex-shrink-0 justify-center items-center p-1.5 border rounded-md border-gray-300 w-10 h-10">
            {item.icon}
          </div>
          <div className="flex flex-col ps-3 2xl:ps-4">
            <h5 className="text-sm font-bold text-[#262626]">
              {t(`${item.name}`)}
            </h5>
            <Link href={item.slug} className="text-sm mt-0">
              {t(`${item.description}`)}
            </Link>
          </div>
        </div>
      ))}
      <div className="w-full">
        <iframe
          width="100%"
          height="300"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Vista Centre, 50 Salisbury Road, Hounslow, TW4 6JQ+(Paintigo)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.maps.ie/distance-area-calculator.html"></a>
        </iframe>
      </div>
    </div>
  );
};

export default ContactInfoBlock;
