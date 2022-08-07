import * as yup from "yup";

let vintageNoPattern = /^([0-9]{1,3}SRI[0-9]{4})$/
let oldNoPattern = /^([0-9]{1,3}-[0-9]{4})$/

export const basicSchema = yup.object().shape({
    vehicleNo: yup.string()
        .required("Required vehicle number")
        .test('test-name', 'Enter Valid Vehicle Number',
            function (value){
                const vintageNoRegex = /^([0-9]{1,3}SRI[0-9]{4})$/
                const oldNoRegex = /^([0-9]{1,3}-[0-9]{4})$/
                const modernNoRegex = /^[A-Z]{2,3}-[0-9]{4}$/

                let isValidVintage = vintageNoRegex.test(value)
                let isValidOld = oldNoRegex.test(value)
                let isValidModern = modernNoRegex.test(value)

                if(!isValidVintage && !isValidOld && !isValidModern){
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