import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="flex pt-4 justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-cyan-700 max-w-xl">
          <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
            Timothy Leong
          </h5>
          <p className="text-gray-900 text-base mb-4">
            Studying Computer Engineering in Singapore Polytechnic
          </p>
          <Link href="https://github.com/tamothee" passHref={true}>
            <a><Image src={'/GithubLogo.png'} width={40} height={40}/></a>
          </Link>
        </div>
      </div>
      <div className="pt-4 text-lg max-w-lg mx-auto px-4">
        Project Diary is a website where I log all interesting projects that I
         have done for future reference as well as to showcase them. Hence, the 
         name Project Diary, as in a project that is a diary that  holds projects 
         hahaha no? sorry...
      </div>
    </div>
  );
}
