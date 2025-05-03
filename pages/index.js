import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-center pt-2">
        <div className="flex md:flex-row rounded-lg bg-[#F8C2B1] dark:bg-gray-800 max-w-xl shadow-lg">
          <div className="p-6 flex flex-col justify-start">
            <h5 className="text-xl font-medium mb-2">
              About Me!
            </h5>
            <p className="text-base mb-4">
              Hello, I am Timothy! Welcome to Project Diary where I log some of my favourite and notable projects
               that I have done.
               I am an aspiring software developer based in Singapore who enjoys getting hands-on experience 
               in software development and IoT projects. Graduated from Singapore Polytechnic in Computer 
               Engineering and will be enrolling into SMU&#39;s Software Engineering program in 2025. 
            </p>
            <p className="text-base mb-4">
              Check out my GitHub and LinkedIn by clicking the logo below!
            </p>
            <div className="display: inline">
              <Link href="https://github.com/tamothee" passHref={true}>
                <a className="b pr-2">
                  <Image
                    src={"/GithubLogo.png"}
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
              <Link
                href="https://sg.linkedin.com/in/timothy-leong-ming-liang-85ba83255"
                passHref={true}
              >
                <a className="b">
                  <Image
                    src={"/LinkedinLogo.svg"}
                    alt=""
                    width={40}
                    height={40}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
