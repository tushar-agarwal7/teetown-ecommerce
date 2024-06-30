import Link from "next/link"
import { Button, buttonVariants } from "./ui/button"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const Navbar = async () => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()
  const admin = user?.email === process.env.ADMIN_EMAIL
  console.log(user)

  return (
    <header className="flex items-center justify-between px-6 py-4 shadow-lg bg-white md:px-8">
      <Link href='/' className='flex items-center font-bold text-xl z-40'>
        <ShirtIcon className="w-8 h-8 mr-2 text-green-600" />
        Tee<span className='text-green-600'>Town</span>
      </Link>

      <div className="flex items-center gap-6">
        {user ? (
          <>
            <Link href='/api/auth/logout' className={buttonVariants({
              size: 'sm',
              variant: 'ghost'
            })}>
              Sign out <span className="pl-2"> <LogoutIcon/></span> 
            </Link>
            {admin && (
              <Link href='/dashboard' className={buttonVariants({
                size: 'sm',
                variant: 'ghost'
              })}>
                DashBoard   <span className="pl-2"> <DashBoardIcon/></span> 
              </Link>
            )}
         <div className='h-8 w-px bg-gray-300 hidden sm:block'/>
            <Link href='/configure/upload' className={buttonVariants({
              size: 'sm',
              variant: 'ghost',
              className: 'hidden sm:flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105'
            })}>
              Create Tees
            </Link>
          </>
        ) : (
          <>
            <Link href='/api/auth/login' className={buttonVariants({
              size: 'sm',
              variant: 'ghost'
            })}>
              Login
            </Link>
            <Link href='/api/auth/register' className={buttonVariants({
              size: 'sm',
              variant: 'ghost'
            })}>
              Sign up
            </Link>
            <div className='h-8 w-px bg-gray-300 hidden sm:block' />
            <Link
              href='/configure/upload'
              className={buttonVariants({
                size: 'sm',
                className: 'hidden sm:flex items-center gap-1 bg-green-600 text-white px-4 py-2 rounded-lg transition-transform transform hover:scale-105'
              })}>
              Create Tees <CreateIcon />
            </Link>
          </>
        )}
      </div>
    </header>
  )
}

function ShirtIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg" 
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}

function CreateIcon(props:any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="20"
      color="#ffffff"
      fill="none"
    >
      <path d="M7 4L15.3306 10.0405C17.5565 11.6545 17.5565 12.3455 15.3306 13.9595L7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}


function DashBoardIcon(props:any){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M8 17L8 14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M12 14L12 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M16 9L16 6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M20 10L20 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M3 3V14C3 17.2998 3 18.9497 4.02513 19.9749C5.05025 21 6.70017 21 10 21H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
</svg>
  )
}

function LogoutIcon(props:any){
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M14 3.09502C13.543 3.03241 13.0755 3 12.6 3C7.29807 3 3 7.02944 3 12C3 16.9706 7.29807 21 12.6 21C13.0755 21 13.543 20.9676 14 20.905" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" />
    <path d="M21 12L11 12M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
</svg>
  )
}