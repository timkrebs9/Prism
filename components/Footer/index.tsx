import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="wow fadeInUp relative z-10 bg-[#111827] pt-20 lg:pt-[100px]"
      data-wow-delay=".15s"
    >
      <div className="mt-12 border-t border-[#111827] border-opacity-40 py-8 lg:mt-[60px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-2/3 lg:w-1/2">
              <div className="my-1">
                <div className="-mx-3 flex items-center justify-center md:justify-start">
                  <a
                    href="/#"
                    className="px-3 text-base text-white hover:text-white hover:underline"
                  >
                    Privacy policy
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-white hover:text-white hover:underline"
                  >
                    Legal notice
                  </a>
                  <a
                    href="/#"
                    className="px-3 text-base text-white hover:text-white hover:underline"
                  >
                    Terms of service
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full px-4 md:w-1/3 lg:w-1/2">
              <div className="my-1 flex justify-center md:justify-end">
                <p className="text-base text-white">
                  Designed and Developed by{" "}
                  <a
                    href="https://tailgrids.com"
                    rel="nofollow noopner noreferrer"
                    target="_blank"
                    className="text-white hover:underline"
                  >
                    Tim Krebs
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
