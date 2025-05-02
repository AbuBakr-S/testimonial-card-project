import Image from "next/image"
import { Noto_Sans } from 'next/font/google';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '600'],
});

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-300 h-screen flex items-start justify-center w-full min-w-[375px]">
    <div className={`${notoSans.className} flex flex-col mt-[200px] bg-white rounded-lg p-6 w-[340px]`}>
      <div className="flex gap-4 items-center mb-4">
        <Image src="/profile-thumbnail.png" alt="profile" width={48} height={48} />
        <div className="flex flex-col">
          <div className="text-gray-900 text-lg font-semibold">Sarah Dole</div>
          <div className="text-gray-600 text-sm font-normal">@sarahdole</div>
        </div>
      </div>
      <p className="font-normal text-base text-gray-600">
        I&apos;ve been searching for high-quality abstract images for my design projects, and I&apos;m thrilled to have found this platform. The variety and depth of creativity are astounding!
      </p> 
    </div>
  </div>
  );
}