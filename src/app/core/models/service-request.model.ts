export interface IServiceRequest<T> {
    succeeded: boolean;
    message: string;
    data: T
}