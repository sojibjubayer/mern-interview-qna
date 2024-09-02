
import { connectDB } from '@/lib/connectDB';


import { NextResponse } from 'next/server';

// export const dynamic="force-dynamic";
export const GET=async()=>{
    

    const db=await connectDB(); 
    const qnaCollection=db.collection('qna')
    try {
       const allQna=await qnaCollection.find().toArray()
       console.log(allQna)
       return NextResponse.json(allQna)
    } catch (error) {
        return NextResponse.json({message:"something went wrong",error})
        
    }
}