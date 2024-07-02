'use server'

import { db } from "@/db"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

export const getAuthStatus=async()=>{
   const {getUser}=await getKindeServerSession()
   const user=await getUser()

   if(!user?.id || !user.email){
    throw new Error('Invalid User')
   }
   const existingUser=await db.user.findFirst({
    where:{
        id:user.id
    }
   })

   if(!existingUser){
    await db.user.create({
        data:{
            id:user.id,
            email:user.email
        }
    })
   }
   return {success:true}
}