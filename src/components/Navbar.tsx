'use client';
import Link from "next/link"
import {signIn,useSession,signOut} from 'next-auth/react'

const Navbar = () => {
  const {data:session} = useSession();

  return (
   <nav className="bg-slate-900 flex justify-between px-24 py-3 text-white items-center">
     <Link href='/'>
       <h1>NextGoogle</h1>
     </Link>
     {session?.user?(
      <div className="flex gap-x-2 items-center ">
      <Link href='/dashboard'>DashBoard</Link>
      <p>{session.user.name} {session.user.email}</p>
      <img src={session.user.image as string}
       className = 'w-10 h-10 rounded-full cursor-pointer'/>
      <button onClick={()=>signIn()} className='bg-sky-900 px-3 py-2 rounded'>LogOut</button> 
    </div>
     ):(
      <button onClick={()=>signIn()} className='bg-sky-900 px-3 py-2 rounded'>SignIn</button> 
     )}
   </nav>
  )
}

export default Navbar