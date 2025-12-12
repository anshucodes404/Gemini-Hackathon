import mongoose, { type Document, Schema } from 'mongoose';

export interface IUser extends Document {
    email: string;
    password: string;
    username: string;
}

const UserSchema = new Schema<IUser>(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        username: { type: String, required: true, unique: true },
    }
)

export const User = mongoose.models.User || mongoose.model<IUser>("User", UserSchema)