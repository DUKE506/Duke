import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";

type ProjectCreateProps = {
    title? : string;
    explain? : string;
    status? : ProjectStatus;
    startAt? : Date;
    endAt? : Date;
};


export async function POST(req : Request){
    console.log('try 외부')
    try {
        console.log('try 내부')
        const body:ProjectCreateProps = await req.json();
        console.log(body);

        return NextResponse.json({ message: "프로젝트 생성 성공", body }, { status: 201 });
    } catch (error) {
        console.error("[Error][dev][CreateProject] ", error);
        return NextResponse.json({error : "프로젝트 생성 실패"}, {status : 500})
    }
}