import * as yup from "yup";

const emailSchema = yup.string().email("Invalid email address").required("Email is required");
const passwordSchema = yup.string().min(6, "Password must be at least 6 characters").required("Password is required");

export const registerSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: emailSchema,
    password: passwordSchema,
});

export const loginSchema = yup.object({
    email: emailSchema,
    password: passwordSchema,
});


export const forgotPasswordSchema = yup.object({
    email : emailSchema,
})

