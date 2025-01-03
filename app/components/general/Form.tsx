"use client"

import React from 'react';
import Header from "@/app/components/general/Header";
import Input from "@/app/components/general/Input";
import {FieldValues, SubmitHandler, useForm} from "react-hook-form";
import Checkbox from "@/app/components/general/Checkbox";
import {TbBoxMultiple1, TbBoxMultiple2, TbBoxMultiple3, TbBoxMultiple4} from "react-icons/tb";
import ChoiceInput from "@/app/components/general/ChoiceInput";
import Button from "@/app/components/general/Button";
import axios from "axios";
import toast from "react-hot-toast";
import {useRouter} from "next/navigation";
import {categories} from "@/utils/Categories";

const Form = () => {

    const router = useRouter();

    const { register,
        handleSubmit,
        setValue, watch,
        reset,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: "",
            description: "",
            brand: "",
            price: "",
            palletCount: "",
            category: "",
            image: "",
            inStock: false
        }
    });
    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        let image: string | undefined = "";
        const description: string | undefined = categories.find(cat => cat.category === data.category)?.description;

        if (data.category === "small") {
            image = process.env.NEXT_PUBLIC_SMALL_WR_IMG;
        }
        else if (data.category === "medium") {
            image = process.env.NEXT_PUBLIC_MEDIUM_WR_IMG;
        }
        else if (data.category === "large") {
            image = process.env.NEXT_PUBLIC_LARGE_WR_IMG;
        }
        else if (data.category === "xlarge") {
            image = process.env.NEXT_PUBLIC_XLARGE_WR_IMG;
        }

        const newData = {...data, image: image, description: description};
        const toastId = toast.loading('Ürün eklenirken bekleyin');
        axios.post('/api/product', newData).then(() => {
            toast.success('Ürün ekleme başarılı', { id: toastId });
            reset();
            router.refresh();
        })
            .catch((error) => {
                toast.error('Ürün ekleme başarısız', { id: toastId });
                console.error('Hata: ', error);
            });

    };

    const category = watch('category');
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        });
    };

    const categoryList = [
        { name: "small", icon: TbBoxMultiple1 },
        { name: "medium", icon: TbBoxMultiple2 },
        { name: "large", icon: TbBoxMultiple3 },
        { name: "xlarge", icon: TbBoxMultiple4 }
    ];

    return (
        <div>
            <Header text='Ürün Oluştur' center/>
            <Input id='name' type='text' register={register} errors={errors} placeholder='İsim' required/>
            <Input id='brand' type='text' register={register} errors={errors} placeholder='Marka' required/>
            <Input id='price' type='number' register={register} errors={errors} placeholder='Fiyat' required/>
            <Input id='palletCount' type='number' register={register} errors={errors} placeholder='Palet Sayısı' required/>
            <Checkbox id='inStock' register={register} label='Ürün stokta mevcut mu?'/>
            <Header text='Kategori' />
            <div className='flex flex-wrap gap-3'>
                {
                    categoryList.map((cat, index) => (
                        <ChoiceInput
                            key={index}
                            text={cat.name}
                            icon={cat.icon}
                            onClick={(category) => setCustomValue("category", category)}
                            selected={category === cat.name}
                        />
                    ))
                }
            </div>
            <Button text='Ürün Oluştur' onClick={handleSubmit(onSubmit)}/>
        </div>
    );
};

export default Form;
