import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
export default function OpenedImage({
  setOpenedImage,
  images,
}: {
  setOpenedImage: Function;
  images: string[];
}) {
  return (
    <div className="!z-[500] fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen">
      <Carousel
        showThumbs
        renderThumbs={(children) => children.reverse()}
        showArrows={true}
        className="w-1/2"
      >
        {images.map((item: any, i: any) => (
          <div key={i} className="h-3/4 w-auto">
            <Image src={item} width={1024} height={1024} alt="" className="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
