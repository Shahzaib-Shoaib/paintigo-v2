import classNames from "classnames";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import { IoChatbubbles } from "react-icons/io5";

interface ItemProps {
	icon: any ;
	title: string;
	description: string;
}

interface Props {
	className?: string;
	item: ItemProps;
}

const TextInformation: React.FC<Props> = ({ item, className }) => {
	const { t } = useTranslation("common");
	return (
		<div
			className={classNames(
				`text-center border-gray-600 xl:border-l xl:first:border-s-0 px-4 sm:px-2.5 2xl:px-8 3xl:px-12 xl:py-12`,
				className
			)}
		>
			<div className="mb-3.5 md:mb-5 xl:mb-3.5 2xl:mb-5 w-14 md:w-auto mx-auto align-middle justify-center flex">
			
				{item.icon}
			</div>
			<div className="-mb-1">
		
				<h3 className="text-heading text-base md:text-lg font-semibold mb-1.5 md:mb-2">
			
					{t(`${item.title}`)}
				</h3>
				<p className="text-body text-xs md:text-sm leading-6 md:leading-7">
					{t(`${item.description}`)}
				</p>
			</div>
		</div>
	);
};

export default TextInformation;
