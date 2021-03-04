import { Param, Get, JsonController, Post, Body, Put, Delete, HttpCode } from 'routing-controllers'
import { Service } from 'typedi'
import { LoginRequest } from '../../validators/Auth/LoginRequest'
import { LoginService } from '../..//services/Auth/LoginService'

@Service()
@JsonController('/login')
export class LoginController {
    constructor(
        private loginService: LoginService
        ) {
        //
    }

    @Get()
    public async login(@Body({ validate: true }) user: LoginRequest) {
        return await this.loginService.login(user)
    }
}