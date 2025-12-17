import mongoose, { schema } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new schema(
    {
        avatar: {
            type: {
                url: String,
                localPath: String,
            },
            default: {
                url: "../../public/images/1148558711187545960.jpg"
            }
 
        },

        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },
        
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true
        },

        password: {
            type: String,
            required: [true, "Password is required"]
        },

        isEmailVerified: {
            type: Boolean,
            default: false,
        },

        refreshToken: {
            type: String
        },

        forgotPasswordToken: {
            type: String
        },

        forgotPasswordExpiry: {
            type: Date
        },

        emailVerificationToken: {
            type: String
        },

        isEmailVerificationExpiry: {
            type: Date
        }
    }, {
        timestamps: true
    },
);

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()
        
    this.password = await bcrypt.hash(this.password, 10)
    next()
})


export const User = mongoose.model("User", userSchema); 