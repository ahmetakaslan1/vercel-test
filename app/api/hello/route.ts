import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    
       message: "Success",
       data: [
        {
            name:"Ahmet",
            age:30
        },
        {
            name:"Ayşe",
            age:25
        }
       ]
       
  });
}