export interface ResponseAPIType<T> {
    status: number;
    message: string;
    error: boolean;
    data: T;
}

export interface InitStateAPIType<T> {
    isLoading: boolean;
    isError: boolean;
    data: T | undefined | null;
}
