import * as yup from "yup";

export const basicSchema = yup.object().shape({
    vehicleNo: yup.string()
        .required("Required vehicle number")
        .test('test-name', 'Enter Valid Vehicle Number',
            function (value){
                const vintageNoRegex = /^(\s*[0-9]{1,3}\s*SRI\s*[0-9]{4}\s*)$/
                const oldNoRegex = /^(\s*[0-9]{1,3}\s*-\s*[0-9]{4}\s*)$/
                const modernNoRegexV1 = /^(\s*[A-Z]{2}\s*[A-Z]{2,3}\s*-\s*[0-9]{4}\s*)$/
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

// .matches(oldNoPattern,  {message:'Enter Valid Vehicle Number'})
// .matchAll([vintageNoPattern,oldNoPattern],  {message:'Enter Valid Vehicle Number'})

// .test('test-name', 'Enter Valid Phone/Email',
//     Function(value) {
//     Const EmailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//
//     Const PhoneRegex = /^(\+91-|\+91|0)?\d{10}$/; // Change This Regex Based On Requirement
//     Let IsValidEmail = EmailRegex.test(value);
//     Let IsValidPhone = PhoneRegex.test(value);
//     If (!isValidEmail && !isValidPhone ){
//         Return False;
//     }
//     Return True;
// })