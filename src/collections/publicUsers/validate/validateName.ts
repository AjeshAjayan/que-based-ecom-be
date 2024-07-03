const createValidateNameFn = (field: string) => (value: string) => {
    if(value) {
        const alphabetsOnlyRegex = /^[a-zA-Z]*$/;
        const isNameValid = alphabetsOnlyRegex.test(value);

        if(isNameValid) {
            return true;
        } else {
            return `${field} is invalid`;
        }
    }

    return `${field} is missing`;
}

export const validateFirstName = createValidateNameFn(`First Name`);
export const validateLastName = createValidateNameFn(`Last Name`);
