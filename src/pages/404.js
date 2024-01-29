import Image from 'next/image';
import hero from '../../public/static/images/404_avatar.gif';
import Link from 'next/link';
export default function FourZeroFour() {
  return (
    <>
      <div className="mx-auto my-auto max-w-2xl px-4 sm:px-6 xl:max-w-2xl xl:px-0 mb-24">
        <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:mb-44">
          <div className="space-x-2 pt-6 pb-8 md:space-y-5">
            <div>
              <Image src={hero} alt="error 404" width="500" height="500" />
            </div>
          </div>
          <div className="max-w-md px-2">
            <p className="mb-4 text-xl font-bold leading-normal md:text-2xl">
              {`404: Sorry we couldn't find this page.`}
            </p>
            <p className="mb-8">
              But dont worry, you can find plenty of other things on our homepage.
            </p>
            <div className="text-center">
              <Link href="/">
                <button className="focus:shadow-outline-blue inline rounded-lg border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium leading-5 text-white shadow transition-colors duration-150 hover:bg-blue-700 focus:outline-none dark:hover:bg-blue-500">
                  Back to homepage
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
