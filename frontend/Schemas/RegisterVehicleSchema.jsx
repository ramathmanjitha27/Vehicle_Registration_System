import * as yup from "yup";

export const registerSchema = yup.object().shape({
    ownerName : yup.string().required('Required owner name'),
    NIC : yup.string()
        .min(10, "Enter valid NIC")
        .required('Required NIC'),
    address : yup.string().required('Required address'),
    mobile : yup.string()
        .min(10, "Enter valid mobile number")
        .required('Required mobile number'),
    vehicleType : yup.string().required('Required vehicle type'),
    vehicleNo: yup.string()
        .required("Required vehicle number")
        .test('test-name', 'Enter Valid Vehicle Number',
            function (value){
                const vintageNoRegex = /^(\s*[0-9]{1,3}\s*SRI\s*[0-9]{4}\s*)$/
                const oldNoRegex = /^(\s*[0-9]{1,3}\s*-\s*[0-9]{4}\s*)$/
                const modernNoRegexV1 = /^(\s*[A-Z]{2} \s*[A-Z]{2,3}\s*-\s*[0-9]{4}\s*)$/
                const modernNoRegexV2 = /^(\s*[A-Z]{2,3}\s*-\s*[0-9]{4}\s*)$/

                let isValidVintage = vintageNoRegex.test(value)
                let isValidOld = oldNoRegex.test(value)
                let isValidModernV1 = modernNoRegexV1.test(value)
                let isValidModernV2 = modernNoRegexV2.test(value)

                if(!isValidVintage && !isValidOld && !isValidModernV1 && !isValidModernV2){
                    return false
                }
                return true
            }
        )
});