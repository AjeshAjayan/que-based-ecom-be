export type PublicUser = {
    id: string;
    phoneNumber: number;
    firstName: string;
    dob: string;
    lastName: string;
    email: string;
    otp: string;
    otpExpiry: string;
    isBlocked?: boolean;
    validated?: boolean;
    reasonForBlock?: string;
}
