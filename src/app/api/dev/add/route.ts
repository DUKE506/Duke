import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { ProjectStatus } from "@prisma/client";

type ProjectCreateProps = {
    title : string;
    explain : string;
    status : ProjectStatus;
    startAt?: string | Date;  // string 또는 Date 타입 허용
    endAt?: string | Date;    // string 또는 Date 타입 허용
};


export async function POST(req : Request){
    try {        
        const body:ProjectCreateProps = await req.json();
        const res = await prisma.project.create({
            data:{
                title: body.title,
                explain: body.explain,
                status: body.status,
                startAt: body.startAt ? new Date(body.startAt) : new Date(),
                endAt: body.endAt ? new Date(body.endAt) : new Date(),
            }
        });

        return NextResponse.json({ message: "프로젝트 생성 성공", project : res }, { status: 201 });
    } catch (error) {
        console.error("[Error][dev][CreateProject] ", error);
        return NextResponse.json({error : "프로젝트 생성 실패"}, {status : 500})
    }
}