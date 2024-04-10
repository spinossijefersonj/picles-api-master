export abstract class CustomError {
    private readonly message;
    private readonly code: string;

    constructor(message: string, code:
    string) {
        this.message = message;
        this.code = code;
        throw new Error(JSON.stringify(this));
    }
}