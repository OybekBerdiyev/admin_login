import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";

export class LoginDto {
    @ApiProperty({example: "johndoe@gmail.com", description: "Admin's email address"})
    @IsString()
    username: string;

    @ApiProperty({example: "Uzbek!$t0n", description: "Admin's password it will be Strong password"})
    @IsNotEmpty()
    password: string;
}