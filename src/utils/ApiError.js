class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong!",
        erros = [],
        stack = "",
    ){
        super(message);
        this.data = null;
        this.statusCode = statusCode;
        this.erros = erros;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
};

export { ApiError };