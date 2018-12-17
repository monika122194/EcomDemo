
export class ResponceModel {
    public token: string;
    public data: any;
    public message: string;
    public validation_msg: any;
    public status_code: string

    constructor(token: string, data: any, message: string, validation_msg: any, status_code: string) {
        this.token = token;
        this.data = data;
        this.message = message;
        this.validation_msg = validation_msg;
        this.status_code = status_code;
    }
}
