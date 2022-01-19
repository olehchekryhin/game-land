import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService, private jwtService: JwtService) {}

    async validateUser(email: string, pass: string): Promise<any> {
        const [ user ] = await this.usersService.findOne(email);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login({ username: e }: any) {
        const [ u ] = await this.usersService.findOne(e);
        const token = this._createToken(u);
        const { _id, email, name, username } = u;

        return {
            user: { _id, email, name, username },
            ...token,
        };
    }

    private _createToken({ email, password }: any): any {
        const user = { email, password };
        const accessToken = this.jwtService.sign(user);
        return {
            expiresIn: process.env.EXPIRESIN,
            accessToken,
        };
    }
}
