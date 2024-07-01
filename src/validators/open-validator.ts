// bg-yellow-400 border-yellow-400
// bg-zinc-900 border-zinc-900
// bg-rose-950 border-rose-950

import { PRODUCT_PRICES } from '@/config/products'

export const COLORS = [
    {label: 'White',value: 'white', tw: 'white',
      },
  { label: 'Black', value: 'black', tw: 'zinc-900' },
  { label: 'Rose', value: 'rose', tw: 'rose-950' },
  { label: 'Yellow', value: 'yellow', tw: 'yellow-400' },

] as const


export const MATERIALS = {
    name: 'material',
    options: [
      {
        label: 'Cotton',
        value: 'cotton',
        description: undefined,
        price: PRODUCT_PRICES.material.cotton,
      },
      {
        label: 'Linen Premium',
        value: 'linen',
        description: 'Scratch-resistant coating',
        price: PRODUCT_PRICES.material.linen,
      },
    ],
  } as const

  export const FINISHES = {
    name: 'finish',
    options: [
      {
        label: 'Smooth Finish',
        value: 'smooth',
        description: undefined,
        price: PRODUCT_PRICES.finish.smooth,
      },
      {
        label: 'Textured Finish',
        value: 'textured',
        description: 'Soft grippy texture',
        price: PRODUCT_PRICES.finish.textured,
      },
    ],
  } as const