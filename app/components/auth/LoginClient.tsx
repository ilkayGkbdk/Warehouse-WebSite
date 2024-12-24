"use client"

import React, {useEffect} from 'react';
import AuthContainer from "@/app/components/containers/AuthContainer";
import Header from "@/app/components/general/Header";
import Input from "@/app/components/general/Input";
import Button from "@/app/components/general/Button";
import { FcGoogle } from "react-icons/fc";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {signIn} from "next-auth/react";
import toast from "react-hot-toast";
import {User} from "@prisma/client";

interface LoginClientProps {
    currentUser: User | null | undefined
}

const LoginClient:React.FC<LoginClientProps> = ({currentUser}) => {

    const router = useRouter();
    const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>()

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const toastId = toast.loading('Giriş yapılırken bekleyin');
        signIn('credentials', {
            ...data,
            redirect: false
        }).then((callback) => {
            if (callback?.ok) {
                router.push('/cart');
                router.refresh();
                toast.success('Giriş Yapıldı', {id:toastId});
            }

            if (callback?.error) {
                toast.error(callback.error, {id:toastId})
            }
        });
    }

    useEffect(() => {
        if (currentUser) {
            router.push('/cart');
            router.refresh();
        }
    }, [])

    return (
        <AuthContainer>
            <div className='w-full md:w-[500px] p-3 shadow-lg'>
                <Header text='Giriş' center/>
                <Input id='email' type='text' register={register} errors={errors} placeholder='E-Mail' required/>
                <Input id='password' type='password' register={register} errors={errors} placeholder='Parola' required/>
                <Button text='Giriş Yap' onClick={handleSubmit(onSubmit)}/>
                <div className='text-center my-2 text-sm'>
                    Hesabın yok mu? <Link className='underline' href='/register'>Kayıt Ol</Link>
                </div>
                <div className='text-center font-bold text-lg my-2'>VEYA</div>
                <Button text='Google ile Giriş Yap' onClick={() => {}} icon={FcGoogle} outline/>
            </div>
        </AuthContainer>
    );
};

export default LoginClient;
