export const validatePhoneNumber = (value: number) => {
    if(value) {
        const phoneRegex = /^(?:\+91|91|0)?[6789]\d{9}$/;
        const isPhoneNumberValid = phoneRegex.test(value.toString());
        if(isPhoneNumberValid) {
            return true;
        } else {
            return 'Phone number is invalid';
        }
    }

    return 'Phone number is missing'
}