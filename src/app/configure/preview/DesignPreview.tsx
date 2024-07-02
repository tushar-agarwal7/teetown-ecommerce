'use client'
import Tshirt2 from "@/components/Tshirt2";
import { Button } from "@/components/ui/button";
import { BASE_PRICE, PRODUCT_PRICES } from "@/config/products";
import { cn, formatPrice } from "@/lib/utils";
import { COLORS } from "@/validators/open-validator";
import { Configuration } from "@prisma/client"
import { useMutation } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react"
import Confetti from 'react-dom-confetti';


const DesignPreview = ({ configuration }: { configuration: Configuration }) => {

    const [showConfetti, setShowConfetti] = useState<boolean>(false);
    useEffect(() => {
        setShowConfetti(true)
    })


    
    const { color, finish, material } = configuration
    const tw = COLORS.find((supportedColor) => supportedColor.value === color)?.tw

    let totalPrice = BASE_PRICE

    if (material === 'linen')
    totalPrice += PRODUCT_PRICES.material.linen
  if (finish === 'textured') totalPrice += PRODUCT_PRICES.finish.textured

   const {} =useMutation({
    mutationKey:["get-checkout-session"],
    mutationFn:
   })
 
  const handleCheckout=()=>{
    
  }

    return (
        <>
            <div
                aria-hidden='true'
                className='pointer-events-none select-none absolute inset-0 overflow-hidden flex justify-center'>
                <Confetti active={showConfetti}
                    config={{ elementCount: 1000, spread: 100 }}
                />
            </div>

            <div className='mt-20 flex flex-col items-center md:grid text-sm sm:grid-cols-12 sm:grid-rows-1 sm:gap-x-6 md:gap-x-8 lg:gap-x-12'>
                <div className='md:col-span-4 lg:col-span-3 md:row-span-2 md:row-end-2'>
                    <Tshirt2 tshirt="/main-tee.png" imgSrc={configuration.croppedImageUrl!} className={cn(`bg-${tw}`, "md:max-w-full max-w-[350px] ")} />
                </div>
                <div className='mt-6  sm:col-span-9 md:row-end-1'>
                    {/* <h3 className='text-3xl font-bold tracking-tight text-gray-900'>
            Your  Tee 
          </h3><img src="/congrats.png" className="h-32 w-32" alt="" /> */}
                    <div className='mt-3 flex items-center gap-1.5 text-base'>
                        <Check className='h-4 w-4 text-green-500' />
                        In stock and ready to ship
                    </div>
                </div>

                <div className='sm:col-span-12 md:col-span-9 text-base'>
                    <div className='grid grid-cols-1 gap-y-8 border-b border-gray-200 py-8 sm:grid-cols-2 sm:gap-x-6 sm:py-6 md:py-10'>
                        <div>
                            <p className='font-medium text-zinc-950'>Highlights</p>
                            <ol className='mt-3 text-zinc-700 list-disc list-inside'>

                                <li>Made from sustainable materials</li>
                                <li>5 year print warranty</li>
                            </ol>
                        </div>
                        <div>
                            <p className='font-medium text-zinc-950'>Materials</p>
                            <ol className='mt-3 text-zinc-700 list-disc list-inside'>
                                <li>Comfortable and breathable fabric</li>
                                <li>Superior durability and fit</li>
                            </ol>
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='bg-gray-50 p-6 sm:rounded-lg sm:p-8'>
                            <div className='flow-root text-sm'>
                                <div className='flex items-center justify-between py-1 mt-2'>
                                    <p className='text-gray-600'>Base price</p>
                                    <p className='font-medium text-gray-900'>
                                        {formatPrice(BASE_PRICE / 100)}
                                    </p>
                                </div>
                                {finish == 'textured' ? (
                                    <div className='flex items-center justify-between py-1 mt-2'>
                                        <p className='text-gray-600'>Textured finish</p>
                                        <p className='font-medium text-gray-900'>
                                            {formatPrice(PRODUCT_PRICES.finish.textured / 100)}
                                        </p>
                                    </div>
                                ) : null}
                                {material === 'linen' ? (
                                    <div className='flex items-center justify-between py-1 mt-2'>
                                        <p className='text-gray-600'>Soft polycarbonate material</p>
                                        <p className='font-medium text-gray-900'>
                                            {formatPrice(PRODUCT_PRICES.material.linen / 100)}
                                        </p>
                                    </div>
                                ) : null}
                                <div className='my-2 h-px bg-gray-200' />

                                <div className='flex items-center justify-between py-2'>
                                    <p className='font-semibold text-gray-900'>Order total</p>
                                    <p className='font-semibold text-gray-900'>
                                        {formatPrice(totalPrice / 100)}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='mt-8 flex justify-end pb-12'>
              <Button
                onClick={() => handleCheckout()}
                className='px-4 sm:px-6 lg:px-8'>
                Check out <ArrowRight className='h-4 w-4 ml-1.5 inline' />
              </Button>
            </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default DesignPreview