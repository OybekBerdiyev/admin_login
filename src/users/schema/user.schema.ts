import { HydratedDocument } from "mongoose";
import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose"

export type UserDocument = HydratedDocument<User> 

@Schema()
export class User {
   
    @Prop({required: true})
    username: string;

    @Prop({required: true})
    password: string;

    @Prop({ required: true, enum: ['admin', 'user'], default: 'user'})
    role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);