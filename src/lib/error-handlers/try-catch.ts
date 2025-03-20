type Success<T> = {
    data: T,
    error: null
}

type Failer<F> = {
    data: null,
    error: F
}


type Result<T, F = Error> = Success<T> | Failer<F>;


export const tryCatch = async <T, F = Error>(
    promise: Promise<T>
): Promise<Result<T, F>> => {
    try {
        const data = await promise;
        return { data, error: null };
    } catch (error) {
        return {
            data: null,
            error: error as F
        }
    }
}