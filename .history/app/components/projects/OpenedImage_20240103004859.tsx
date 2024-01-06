import Image from "next/image";
import Link from "next/link";

export default function OpenedImage({
  setOpenedImage,
}: {
  setOpenedImage: Function;
}) {
  return (
    <div className="fixed left-0 top-0 bg-black bg-opacity-30 flex items-center justify-center h-screen w-screen"></div>
  );
}
