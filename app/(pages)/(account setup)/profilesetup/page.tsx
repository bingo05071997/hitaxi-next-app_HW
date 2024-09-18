"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import FacbookIcon from "@/public/svg/facebook-icon.svg";
import GoogleIcon from "@/public/svg/google-icon.svg";
import AppleIcon from "@/public/svg/apple-icon.svg";
import Link from "next/link";
import EmailInput from "@/app/components/forms/email-input";
import PasswordInput from "@/app/components/forms/password-input";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "@/app/components/forms/text-input";
import DateInput from "@/app/components/forms/date-input";
import PhoneInput from "@/app/components/forms/phone-input";
import SelectInput from "@/app/components/forms/select-input";
import { genderOptions } from "@/app/common/constants";
import { ProfileType } from "@/app/common/types";
import AvatarInput from "@/app/components/forms/avatar-input";
import Modal from "@/app/components/modals/modal";
import LoaderIcon from "@/public/svg/loader.svg";

export default function ProfileSetup(): JSX.Element {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      fullName: "",
      nickName: "",
      dateOfBirth: "",
      phoneNumber: "",
      gender: "male",
      avatar: undefined
    },
    validationSchema: Yup.object().shape({
      fullName: Yup.string().required("Required"), 
      nickName: Yup.string().required("Required"), 
      phoneNumber: Yup.string().required("Required"),
      gender: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      openCongratulationsModal();
      // router.push("/profilesetup");
    },
  });

  const [isCongratulationsModalOpen, setIsCongratulationsModalOpen] = useState<boolean>(false);

  const openCongratulationsModal = () => {
    setIsCongratulationsModalOpen(true);
  };

  const closeCongratulationsModal = () => {
    setIsCongratulationsModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center py-5 sm:py-10 h-full">
        <form className="flex flex-col items-center justify-between space-y-10 w-full" onSubmit={formik.handleSubmit}> 
            <div className="flex flex-col space-y-5 w-full">
                <AvatarInput 
                    name="avatar"
                    value={formik.values.avatar}
                    onChange={(value) => formik.setFieldValue("avatar", value)}
                    errors={formik.errors.avatar}
                    />

                <TextInput 
                    className="w-full" 
                    name="fullName"
                    placeholder="Full Name"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.fullName}
                />
                
                <TextInput 
                    className="w-full" 
                    name="nickName"
                    placeholder="Nick Name"
                    value={formik.values.nickName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.nickName}
                />

                <DateInput 
                    className="w-full" 
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={formik.values.dateOfBirth}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.dateOfBirth}
                />

                <EmailInput 
                    className="w-full" 
                    name="email" 
                    value=""
                    readOnly={true}
                    iconRight={true}
                />

                <PhoneInput
                    className="w-full" 
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    errors={formik.errors.phoneNumber}
                    />

                <SelectInput
                    className="w-full" 
                    name="gender"
                    value={formik.values.gender}
                    onChange={(value) => formik.setFieldValue("gender", value)}
                    errors={formik.errors.gender}
                    options={genderOptions}
                    />
                
            </div>

            <div className="flex flex-row items-center justify-center w-full">
                <button type="submit" className="bg-yellow-500 w-full hover:bg-yellow-700 rounded-full text-black font-semibold py-4 px-8 justify-center font-urbanist text-base">
                    Continue
                </button>
            </div>
        </form>

        <Modal isOpen={isCongratulationsModalOpen} onClose={closeCongratulationsModal} title="Congratulations!">
            <div className="flex flex-col items-center justify-center space-y-8">
                <p className="font-urbanist text-base text-center">Your account is ready to use. You will be redirected to the Home page in a few seconds..</p>
                <LoaderIcon className="animate-spin" />
            </div>
        </Modal>
    </div>
  );
}
