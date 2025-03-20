export type TypeActionResponse<T> = { 
    success: boolean,
    message: string,
    data?: T,
    error?: Error,
    metadata?: {
        page: number,
        limit: number,
        total: number
    }
}