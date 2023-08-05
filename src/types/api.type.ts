export interface ResponseAPIType<T = any> {
    statusCode: number;
    message: string;
    data: T;
}
