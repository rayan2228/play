class ApiResponse {
    constructor(statusCode, message = "success", data) {
        this.statusCode = statusCode < 400
        this.success = statusCode
        this.message = message
        this.data = data
    }
}