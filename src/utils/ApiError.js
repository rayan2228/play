class ApiError extends Error {
    constructor(statusCode, message = "something went wrong", errors = [], stack = "") {
        super(message)
        this.statusCode = statusCode >= 400
        this.errors = errors
        this.message = message
        this.data = []
        this.success = false
        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}
