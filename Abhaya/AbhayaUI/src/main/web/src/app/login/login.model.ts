export class Login {
    public type: string;
    public userName: string;

    public password: string;

    constructor(type: string, userName: string, password: string) {
        this.type = type;
        this.userName = userName;
        this.password = password;
    }
}
