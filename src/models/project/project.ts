import prisma from "@/lib/prisma";
import { Project, ProjectStatus, Prisma} from "@prisma/client"

export type ProjectCreateInput = {
    title : string;
    explain : string;
    status : ProjectStatus;
    startAt: Date;
    endAt: Date;
};

