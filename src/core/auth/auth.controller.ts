import { Body, Controller, Header, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthenticationDto } from './dto/login.dto';
import { TokenDto } from './dto/token.dto';
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }
    @Post()

    @Header("Cache-Control", "none")
    createProduct(@Body() authenticationDto: AuthenticationDto): Promise<TokenDto> {
        return this.authService.login(authenticationDto);
    }

}
