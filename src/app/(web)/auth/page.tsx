'use client';

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import  { signUp } from 'next-auth-sanity/client'
import  { signIn, useSession } from 'next-auth/react'
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

const defaultFormData = {
    email: '',
    name: '',
    password: '',
};

const Auth = () => {
    const [formData, setFormData] = useState(defaultFormData);

    const inputStyles =
        'border border-white sm:text-sm text-white placeholder-[#333333] rounded-lg block w-full p-2.5 focus:outline-none bg-black';

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const {data: session} = useSession();
    console.log(session);
    const router = useRouter();

    useEffect(() => {
        if (session?.user) {
            router.push('/'); // Redirect to homepage if user is authenticated
        }
    }, [session, router]);

    const loginHandler = async () => {
        try {
            await signIn();
            // Homepage redirect
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong')
        }
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            const user = await signUp(formData)
            if (user) {
                toast.success("Success. Please sign in")
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong")
        } finally {
            setFormData(defaultFormData);
        }
    };

    return (
        <div className='container mx-auto bg-black min-h-screen text-white'>
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 w-80 md:w-[70%] mx-auto">
                <div className="flex mb-8 flex-col md:flex-row items-center justify-between">
                    <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                        Create an Account
                    </h1>
                    <p>OR</p>
                    <span className='inline-flex items-center'>
                        <AiFillGithub onClick= {loginHandler} className='mr-3 text-4xl cursor-pointer text-white' />{' '}
                        <FcGoogle onClick= {loginHandler} className='ml-3 text-4xl cursor-pointer' />
                    </span>
                </div>

                <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
                    <input
                        type='email'
                        name="email"
                        placeholder="name@company.com"
                        required
                        className={inputStyles}
                        value={formData.email}
                        onChange={handleInputChange}
                    />

                    <input
                        type='text'
                        name="name"
                        placeholder="John Doe"
                        required
                        className={inputStyles}
                        value={formData.name}
                        onChange={handleInputChange}
                    />

                    <input
                        type='password'
                        name="password"
                        placeholder="Sup3RS3creT!23"
                        required
                        minLength={6}
                        className={inputStyles}
                        value={formData.password}
                        onChange={handleInputChange}
                    />

                    <button
                        type='submit'
                        className="w-full bg-amber-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-white text-center"
                    >
                        Sign up!
                    </button>

                    <button onClick= {loginHandler}
                        type='button'
                        className='w-full bg-amber-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 underline text-center'
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Auth;
