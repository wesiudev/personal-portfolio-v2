import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
export default function OpenedImage({
  setOpenedImages,
  images,
}: {
  setOpenedImages: Function;
  images: string[];
}) {
  return (
    <div className="z-[250] fixed left-0 top-0 bg-black bg-opacity-50 flex items-center justify-center h-screen w-screen"></div>
  );
}
