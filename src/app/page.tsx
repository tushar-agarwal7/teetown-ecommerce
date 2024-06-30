import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react";
import Tshirt from "@/components/Tshirt";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Home() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  const name = user?.given_name || "Guest";

  return (
    <div>
      {/* <h1 className="text-xl font-semibold bg-gray-100 px-4 py-2 rounded-lg shadow-md">{`Welcome, ${name}`}</h1> */}
        
      <section> 
        <div className="flex flex-col min-h-[100vh]">
          <main className="flex-1">
            <section className="text-gray-900 py-12 md:py-24 flex flex-col min-h-[100vh] md:justify-center ml-20">
              <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-5xl md:text-6xl lg:text-7xl'>
                    Showcase Your Image on a{' '}
                    <span className='bg-green-600 px-2 text-white'>Custom</span>{' '}
                    T-Shirt
                  </h1>
                  <p className="text-lg">Explore our curated collection of stylish and comfortable t-shirts.</p>
                  <div>
                    <ul className='mt-8 space-y-2 text-left font-medium flex flex-col items-center sm:items-start'>
                      <div className='space-y-2'>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-green-600' />
                          High-quality, Ultimate Comfort
                        </li>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-green-600' />
                          2 year print guarantee
                        </li>
                        <li className='flex gap-1.5 items-center text-left'>
                          <Check className='h-5 w-5 shrink-0 text-green-600' />
                          Stay Stylish with Our Cutting-Edge Designs
                        </li>
                      </div>
                    </ul>
                  </div>
                  <div className="flex gap-4">
                    <Button>Shop Now</Button>
                  </div>
                </div>
                <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-fit'>
                  <div className='relative md:max-w-xl hover:scale-105 transform transition duration-300'>
                    <img
                      src='/your-image.png'
                      className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
                    />
                    <img
                      src='/line.png'
                      className='absolute w-24 -left-6 -bottom-6 select-none'
                    />
                    <Tshirt tshirt='tshirt.png' imgSrc='/1.jpg' />
                  </div>
                </div>
              </div>
            </section>
            <section className="py-12 md:py-24 bg-gradient-to-r from-gray-100 to-gray-200">
              <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                  <h2 className="text-4xl font-bold mb-4 text-white bg-gray-600">Trendings</h2>
                  <p className="text-green-900 text-lg">Check out our latest t-shirt designs.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                  <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-8 lg:mx-0 lg:mt-12 h-fit'>
                    <div className='relative md:max-w-xl hover:scale-105 transform transition duration-300'>
                      <img
                        src='/line.png'
                        className='absolute w-24 -left-6 -bottom-6 select-none'
                      />
                      <Tshirt tshirt="tshirt2.png" className="h-96 w-96" imgSrc='/1.jpg' />
                    </div>
                  </div>
                  <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-8 lg:mx-0 lg:mt-12 h-fit'>
                    <div className='relative md:max-w-xl hover:scale-105 transform transition duration-300'>
                      <Tshirt tshirt="tshirt.png" className="h-96 w-96" imgSrc='/1.jpg' />
                    </div>
                  </div>
                  <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-16 md:px-0 mt-8 lg:mx-0 lg:mt-12 h-fit'>
                    <div className='relative md:max-w-xl hover:scale-105 transform transition duration-300'>
                      <Tshirt tshirt="tshirt3.png" className="h-96 w-96" imgSrc='/1.jpg' />
                    </div>
                  </div>
                </div>
                <div className="mt-24 text-center">
                  <h3 className="text-2xl font-semibold mb-10 ">Exclusive <span className="text-green-600">Offers</span></h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                      <img src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="Offer 1" className="w-full h-60 object-cover rounded-lg mb-4" />
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">Buy One Get One Free</h4>
                      <p className="text-gray-600">For a limited time, buy one t-shirt and get another one free!</p>
                    </div>
                    <div className="p-6 rounded-lg shadow-lg hover:scale-105 transform transition duration-300">
                      <img src="https://plus.unsplash.com/premium_photo-1700056029402-fbe10046bd8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Offer 2" className="w-full h-60 object-cover rounded-lg mb-4" />
                      <h4 className="text-xl font-semibold text-gray-800 mb-2">20% Off Summer Sale</h4>
                      <p className="text-gray-600">Enjoy 20% off on all summer t-shirts. Don't miss out!</p>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">Subscribe to our Newsletter</h3>
                  <p className="text-gray-600 mb-4">Stay updated with the latest trends and exclusive offers.</p>
                  <input type="email" placeholder="Enter your email" className="p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400" />
                  <button className="ml-4 px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400">Subscribe</button>
                </div>
              </div>
            </section>
            <MaxWidthWrapper classname='flex flex-col items-center gap-16 sm:gap-32'>
              <div className='flex flex-col lg:flex-row items-center gap-4 sm:gap-6 mt-20'>
                <h2 className='order-1 mt-2 tracking-tight text-center text-balance !leading-tight font-bold text-5xl md:text-6xl text-gray-900'>
                  What our{' '}
                  <span className='relative px-2 text-green-600'>
                    customers{' '}
                  </span>{' '}
                  say
                </h2>
              </div>
              <div className='mx-auto grid max-w-2xl grid-cols-1 px-4 lg:mx-0 lg:max-w-none lg:grid-cols-2 gap-y-16'>
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 mb-20'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  </div>
                  <div className='text-lg leading-8'>
                    <p>
                      "The tee feels comfortable and I even got a compliment on the
                      design. Had the tee for two and a half months now and{' '}
                      <span className='p-0.5 bg-slate-800 text-white'>
                        the image is super clear
                      </span>, on the tee I had before, the image started fading into
                      yellow-ish color after a couple weeks. Love it."
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <img
                      className='rounded-full h-12 w-12 object-cover'
                      src='/user-1.png'
                      alt='user'
                    />
                    <div className='flex flex-col'>
                      <p className='font-semibold'>Jonathan</p>
                      <div className='flex gap-1.5 items-center text-zinc-600'>
                        <p className='text-sm'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-auto flex-col gap-4 lg:pr-8 xl:pr-20 md:mb-10'>
                  <div className='flex gap-0.5 mb-2'>
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                    <Star className='h-5 w-5 text-green-600 fill-green-600' />
                  </div>
                  <div className='text-lg leading-8'>
                    <p>
                      "I absolutely love the new t-shirt designs! The quality is{' '}
                      <span className='p-0.5 bg-slate-800 text-white'>
                        amazing and they are so comfortable to wear.
                      </span> The quality is top-notch, they're incredibly comfortable to wear, and they feel like a dream to wear. I'm thoroughly impressed!"
                    </p>
                  </div>
                  <div className='flex gap-4 mt-2'>
                    <img
                      className='rounded-full h-12 w-12 object-cover'
                      src='user-5.jpg'
                      alt='user'
                    />
                    <div className='flex flex-col'>
                      <p className='font-semibold'>Josh</p>
                      <div className='flex gap-1.5 items-center text-zinc-600'>
                        <p className='text-sm'>Verified Purchase</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MaxWidthWrapper>
          </main>
        </div>
      </section>
    </div>
  );
}
