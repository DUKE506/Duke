import { ProjectStatus } from "@prisma/client";


export interface project {
    title?: string;
    explain?: string;
    startAt?: Date | null;
    endAt?: Date | null;
    status?: ProjectStatus | null;
}