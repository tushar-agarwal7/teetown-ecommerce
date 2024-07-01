'use server'

import { db } from "@/db"
import { TeeColor, TeeFinish, TeeMaterial } from "@prisma/client"

export type saveConfigProps={
    color:TeeColor
    finish:TeeFinish
    material:TeeMaterial
    configId:string
}

export async function saveConfig({
    color,
    finish,
    material,
    configId
}:saveConfigProps){

  await  db.configuration.update({
    where:{
        id:configId
    },
    data:{
        color,finish,material
    }
  })
}