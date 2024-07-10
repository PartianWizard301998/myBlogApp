import { Time } from "@angular/common";

export interface Blog {
    _id : string,
    blogTitle : string,
    blogCatagory : string,
    blogShortDesc:string,
    blogContent : string,
    creater : string,
    createdAt : Time,
    updatedAt : Time,
}
