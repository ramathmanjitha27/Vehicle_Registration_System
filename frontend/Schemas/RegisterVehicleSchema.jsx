import * as yup from "yup";

//Validate user input when registering
export const registerSchema = yup.object().shape({
    ownerName : yup.string().required('Required owner name'),
    NIC : yup.string()
        .min(10, "Enter valid NIC")
        .max(12, "Enter valid NIC")
        .required('Required NIC'),
    address : yup.string().required('Required address'),
    mobile : yup.string()
        .min(10, "Enter valid mobile number")
        .max(10,"Enter valid mobile number")
        .required('Required mobile number'),
});