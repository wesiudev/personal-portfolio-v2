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
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90vw] lg:w-2/3 h-max"
      >
        <Carousel selectedItem={selectedItem} infiniteLoop emulateTouch>
          {images.map((item: any, i: any) => (
            <Image
              src={item}
              width={1024}
              height={1024}
              alt=""
              className="p-3"
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
}
