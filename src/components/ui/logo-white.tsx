import Image from "next/legacy/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site-settings";

const LogoWhite: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  return (
    <Link
      href={siteSettings.logo.href}
      className={cn("inline-flex focus:outline-none", className)}
      {...props}
    >
      {/* <h1 className="text-white text-xl font-satisfy">Paintigo</h1> */}
      <Image
        src={siteSettings.logo.whiteurl}
        alt={siteSettings.logo.alt}
        height={150}
        width={150}
        loading="eager"
      />
    </Link>
  );
};

export default LogoWhite;
