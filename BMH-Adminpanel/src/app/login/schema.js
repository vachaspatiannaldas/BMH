import * as Yup from "yup";

export const signUpSchema = Yup.object({
    name: Yup.string().min(2).max(50).required("Please enter category name"),
    status: Yup.string().required("Select Status"),
    // email: Yup.string().email().required("Please enter your email"),
    // password: Yup.string().min(6).required("Please enter your password"),
    // confirmpassword: Yup.string().required().oneOf([Yup.ref('password'), null], "Password must match"),
});


// string()
//    .required("Please enter the required field")
//    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")