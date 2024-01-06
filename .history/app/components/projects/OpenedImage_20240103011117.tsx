import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
export default function OpenedImage({
  setOpenedImages,
  images,
  selectedItem,
}: {
  setOpenedImages: Function;
  images: string[];
  selectedItem: number | undefined;
}) {
  return (
    <div
      onClick={(e) => {
        setOpenedImages(null), e.stopPropagation();
      }}
      className="z-[250] fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen"
    >
      <Carousel className="w-1/2" selectedItem={selectedItem} infiniteLoop>
        {images.map((item: any, i: any) => (
          <Image
            onClick={(e) => e.stopPropagation()}
            src={item}
            width={1024}
            height={1024}
            alt=""
            className=""
          />
        ))}
      </Carousel>
    </div>
  );
}
