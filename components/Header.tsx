import Link from 'next/link';

export default function Header() {
  return (
    <>
      <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <header className="flex justify-between items-center py-4 md:py-8 mb-8 md:mb-12 xl:mb-16">
            <a href="/" className="inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5"
               aria-label="logo">
              <svg width="95" height="94" viewBox="0 0 95 94" className="w-6 h-auto text-indigo-500" fill="currentColor"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M96 0V47L48 94H0V47L48 0H96Z"/>
              </svg>
              Flowrift
            </a>
            <nav className="lg:flex gap-12">
              <a href="#" className="text-indigo-500 text-lg font-semibold">Home</a>
              <a href="#"
                 className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Features</a>
              <a href="#"
                 className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">Pricing</a>
              <a href="#"
                 className="text-gray-600 hover:text-indigo-500 active:text-indigo-700 text-lg font-semibold transition duration-100">About</a>
            </nav>
            <a href="#"
               className="hidden lg:inline-block bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">Contact
              Sales</a>
          </header>
        </div>
      </div>
    </>
  );
}