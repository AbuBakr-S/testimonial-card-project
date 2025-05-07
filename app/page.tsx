import Image from "next/image"
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Home() {
  return (
    <figure className="bg-gradient-to-br from-[#f9fafb] to-[#d2d6db] h-screen flex items-start justify-center w-full min-w-[375px]">
      <figcaption className={`${notoSans.className} flex flex-col mt-[200px] bg-white rounded-lg p-6 w-[340px]`}>
        <div className="flex gap-4 items-center mb-4">
          <Image src="/profile-thumbnail.png" alt="Profile picture of Sarah Dole" width={48} height={48} />
          <div className="flex flex-col">
            <div className="text-neutral-900 text-lg font-semibold">Sarah Dole</div>
            <div className="text-neutral-600 text-sm font-normal">@sarahdole</div>
          </div>
        </div>
        <blockquote className="font-normal text-base text-gray-600">
          I&apos;ve been searching for high-quality abstract images for my design projects, and I&apos;m thrilled to have found this platform. The variety and depth of creativity are astounding!
        </blockquote>
      </figcaption>
    </figure>
  );
}