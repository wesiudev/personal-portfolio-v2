import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export default function NavLeft() {
  return (
    <div
      data-aos="fade-in"
      data-aos-delay={1500}
      className="fixed left-12 top-12 bottom-12 flex flex-col-reverse lg:flex-col items-center justify-center space-y-3"
    >
      <Link
        target="_blank"
        title="Przejdź do Github.com"
        href="https://github.com/wesiudev"
      >
        <FaGithub className="h-8 w-8" />
      </Link>
      <Link
        target="_blank"
        title="Przejdź do Linkedin.com"
        href="https://linkedin.com/in/wesiudev"
      >
        <FaLinkedin className="h-8 w-8" />
      </Link>
      <div className="w-px h-24 bg-black"></div>
    </div>
  );
}
