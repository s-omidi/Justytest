import { IError } from "./error.mode";

export interface IServiceRequest<T> extends IError {
    succeeded: boolean;
    message: string;
    data: T
}