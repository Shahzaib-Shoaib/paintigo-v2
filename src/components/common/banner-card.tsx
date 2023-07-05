"use-client";
import Link from "@components/ui/link";
import Image from "next/image";
import type { FC } from "react";
import { useWindowSize } from "@utils/use-window-size";
import cn from "classnames";
import { LinkProps } from "next/link";

interface BannerProps {
  banner: any;
  variant?: "rounded" | "default";
  effectActive?: boolean;
  className?: string;
  classNameInner?: string;
  href: LinkProps["href"];
  disableBorderRadius?: boolean;
}
function getImage(width: number, imgObj: any) {
  if (width > 480) {
    return imgObj.desktop;
  } else {
    return imgObj.mobile;
  }
}

const BannerCard: FC<BannerProps> = ({
  banner,
  className,
  variant = "rounded",
  effectActive = false,
  classNameInner,
  href,
  disableBorderRadius = false,
}) => {
  const { width } = useWindowSize();
  const { title, image } = banner;
  const selectedImage = getImage(width, image);

  return (
    <div className={cn("mx-auto", className)}>
      <Link
        href={href}
        className={cn(
          "h-full group flex justify-center relative overflow-hidden",
          classNameInner
        )}
      >
        <Image
          src={selectedImage.url}
          width={selectedImage.width}
          height={selectedImage.height}
          alt={title}
          quality={100}
          className={cn("bg-gray-300 object-cover w-full", {
            "rounded-md": variant === "rounded" && !disableBorderRadius,
          })}
        />
        {effectActive && (
          <div className="absolute top-0 -start-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine" />
        )}
      </Link>
    </div>
  );
};

export default BannerCard;

export async function getServerSideProps({ req }) {
  const userAgent = req.headers["user-agent"];
  const isMobile = /Mobile/.test(userAgent);

  // Define your own logic to estimate the window size based on the device
  const windowSize = isMobile ? "Mobile Size" : "Desktop Size";

  return {
    props: {
      windowSize,
    },
  };
}
