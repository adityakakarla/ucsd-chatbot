import { SignIn } from '@clerk/nextjs'

export default function Page() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[100svh]'>
        <SignIn/>
    </div>
  )
}