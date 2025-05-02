import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-2">
        <div className="flex md:flex-row rounded-lg bg-[#F8C2B1] dark:bg-gray-800 max-w-xl shadow-lg">
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-xl font-medium mb-2">
              Timothy Leong
            </h5>
            <p className="text-base mb-4">
              Singapore Polytechnic Computer Engineering Graduate
            </p>
            <div className="display: inline">
              <Link href="https://github.com/tamothee" passHref={true}>
              <a className="b">
                <Image src={"/GithubLogo.png"} alt="" width={40} height={40} />
              </a>
            </Link>
            <Link href="https://sg.linkedin.com/in/timothy-leong-ming-liang-85ba83255" passHref={true}>
              <a className="b">
                <Image src={"/LinkedinLogo.svg"} alt="" width={40} height={40} />
              </a>
            </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-4 text-lg max-w-lg mx-auto px-4">
        <div className="flex justify-center ">
          <div className="block p-6 rounded-lg shadow-lg dark:bg-gray-600 max-w-md">
            <p className="text-gray-700 dark:text-white text-lg mb-4">
              Project Diary is a website where I log some of my favourite 
              and notable projects that I have done for future reference as 
              well as to showcase them.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
