export interface ResponseApiModel<T> {
    statusCode: number;
    message: string;
    data?: T;
}
