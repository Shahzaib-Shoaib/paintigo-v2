import Image from "next/legacy/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import ReactPlayer from "react-player";
export default function GalleryPageContent({ video }: any) {
  console.log(video);

  return (
    <div className="flex items-center justify-center my-9">
      <ReactPlayer
        url={video.content}
        light={false}
        controls={true}
        width={1200}
        height={600}
      />
    </div>
  );
}
