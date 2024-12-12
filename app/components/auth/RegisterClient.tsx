"use client"

import React, {useEffect} from 'react';
import AuthContainer from "@/app/components/containers/AuthContainer";
import Header from "@/app/components/general/Header";
import Input from "@/app/components/general/Input";
import Button from "@/app/components/general/Button";
import { FcGoogle } from "react-icons/fc";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import {signIn} from "next-auth/react";
import {useRouter} from "next/navigation";
import {User} from "@prisma/client";

interface RegisterClientProps {
    currentUser: User | null | undefined
}

const RegisterClient:React.FC<RegisterClientProps> = ({currentUser}) => {

    const router = useRouter();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        axios.post('/api/register', data).then(() => {
            toast.success('Kullanıcı oluşturuldu');
            signIn('credentials', {
                email: data.email,
                password: data.password,
                redirect: false
            }).then((callback) => {
                if (callback?.ok) {
                    router.push('/cart');
                    router.refresh();
                    toast.success('Giriş Yapıldı')
                }

                if (callback?.error) {
                    toast.error(callback.error)
                }
            })
        })
    };

    useEffect(() => {
        if (currentUser) {
            router.push('/cart');
            router.refresh();
        }
    }, []);

    return (
        <AuthContainer>
            <div className='w-full md:w-[500px] p-3 shadow-lg'>
                <Header text='Kayıt' center/>
                <Input id='name' type='text' register={register} errors={errors} placeholder='İsim' required/>
                <Input id='email' type='text' register={register} errors={errors} placeholder='E-Mail' required/>
                <Input id='password' type='password' register={register} errors={errors} placeholder='Parola' required/>
                <Button text='Kayıt Ol' onClick={handleSubmit(onSubmit)}/>
                <div className='text-center my-2 text-sm'>
                    Zaten bir hesabın var m? <Link className='underline' href='/login'>Giriş Yap</Link>
                </div>
                <div className='text-center font-bold text-lg my-2'>VEYA</div>
                <Button text='Google ile Kayıt Ol' onClick={() => {
                }} icon={FcGoogle} outline/>
            </div>
        </AuthContainer>
    );
};

export default RegisterClient;
