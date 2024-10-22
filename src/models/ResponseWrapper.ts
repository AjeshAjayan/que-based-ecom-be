export type ResponseWrapper<D> = {
    data: D,
    message: string,
    statusCode: number,
    status: string
}