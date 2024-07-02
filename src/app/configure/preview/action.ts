'use server'

import { db } from "@/db"

export const createCheckoutSession=async({configId}:{configId:string})=>{
    const configuration=await db.configuration.findUnique({
        where:{id:configId},

    })

    if(!configuration){
        throw new Error("NO such configuration found")
    }
    
}