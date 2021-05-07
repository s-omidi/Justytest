import { IBaseModel } from "src/app/core/models/baseMode";

export interface IUser extends IBaseModel {
    userName: string;
    email: string;
    isVerified: boolean;
    jwToken: string;
    refreshToken: string;
    role: [string];
}