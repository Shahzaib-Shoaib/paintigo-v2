import Link from "@components/ui/link";
import Image from "next/legacy/image";
import { ROUTES } from "@utils/routes";

const VideoCard = ({ video }: any) => {
  const { handle, title, excerpt } = video.node;

  const { altText, url } = video.node.image;

  return (
    <Link legacyBehavior href={`${ROUTES.GALLERY}/${excerpt}/${handle}`}>
      <div className="group">
        <div className="bg-white border border-gray-200 rounded-lg shadow-product ">
          <div className="xl:h-[510px] h-auto">
            <img className="rounded-t-lg" src={url} alt={altText} />
          </div>
          <div className="p-5">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 h-36 ">
              {title}{" "}
            </h5>
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#262626] rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none cursor-pointer ">
              Watch Now{" "}
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
