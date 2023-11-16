import Image from 'next/image'
import imageEmptyCart from '@/public/images/empty-basket.webp'
import Link from 'next/link'
function CartPage() {
  return (
    <div className="flex flex-col text-white justify-center items-center min-h-screen gap-y-8">
        <h2 className='text-2xl text-white  rounded-md'>متاسفانه سبد خرید شما خالی است!</h2>
        <Image className='w-[200px] ' src={imageEmptyCart} alt='imageEmptyCart' width={1000} height={1000}/>
        <Link href="/" className='bg-primary text-white px-8 py-2 rounded-md mt-5'>صفحه اصلی </Link>
    </div>
  )
}

export default CartPage