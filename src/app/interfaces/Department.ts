import { Enterprise } from "./Enterprise";

export interface Department{
    enterprise:Enterprise|undefined,
    phone:string;
    name:string;
    description:string;
    idDepartment?:number,
    status?:string;
    created_by?:string;
    created_date?:Date;
    modified_by?:string;
    modified_date?:Date;
}