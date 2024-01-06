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
    <div className="fixed left-0 top-0 bg-black bg-opacity-30 flex items-center justify-center h-screen w-screen">
      <Carousel showArrows={true}>
        {images.map((item: any, i: any) => (
          <div key={i}>
            <Image src={item} width={1024} height={1024} alt="" className="" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
