import Image from "next/image";
import fullLogo from '@/public/assets/icons/logo-full.svg';
import registerImg from '@/public/assets/images/register-img.png';
import RegisterForm from "@/components/forms/RegisterForm";
import { getUser } from "@/lib/actions/patient.actions";
// import RegisterForm1 from "@/components/forms/RegisterForm-1";


const Register = async ({ params: { userId } }: SearchParamProps) => {
    const user = await getUser(userId);
    return (
        <div className="flex h-screen max-h-screen">
            <section className="remove-scrollbar container">
                <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
                    <Image
                        src={fullLogo}
                        height={1000}
                        width={1000}
                        alt="patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <RegisterForm user={user} />
                    {/* <RegisterForm1 user={user} /> */}
                    <p className="copyright py-12">
                        ©️ 2024 CarePulse
                    </p>
                </div>
            </section>
            <Image
                src={registerImg}
                height={1000}
                width={1000}
                alt="patient"
                className="side-img max-w-[390px]"
            />
        </div>

    );
}

export default Register
