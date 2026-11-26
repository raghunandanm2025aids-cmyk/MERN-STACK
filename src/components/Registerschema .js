import z from "zod";

export const Registerschema = z.object({
    name:z.string().min(3,"Name must contain minimum 3 letter"),
    email:z.string().email("Enter a valid email"),
    password:z.string().min(8,"password must contain minimum 8 char"),
    age:z.string().min(18,"age must be minimum of 18")

})