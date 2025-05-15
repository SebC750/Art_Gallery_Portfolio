import Image from "next/image";
import Link from "next/link"
import bgImage from "../../public/sailor_moon.jpg"
export default function Home() {
  return (
    <div className="">
      <div className="hero min-h-screen bg-black">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src={bgImage}
            width={600}
            height={600}
            alt="Sample drawing used as hero picture"
            className="max-w-sm rounded-lg shadow-2xl border-2 md:h-auto md:w-auto border-red-500"
          />
          <div className="text-red-500 md:text-left text-center">
            <h1 className="text-5xl font-bold"> Welcome. </h1>
            <p className="py-6 text-balance">
              This website is a compendium of all my artworks, from single panel drawings to comics and animations.
              Feel free to look around.
            </p>
            <div className="flex items-center gap-4 justify-center md:justify-start">
              <Link href={"/gallery"} className="link-hover underline-offset-8 font-bold"> Go to gallery </Link>
              <Link href={"/about"} className="link-hover underline-offset-8 font-bold"> About me </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
