'use client';

import { ReactNode } from "react";
import { FormEvent } from "react";



export default function TestForm({children}:  Readonly<{
  children: React.ReactNode;
}>){

    async function onSubmit(event: FormEvent<HTMLFormElement>){
        const formData = new FormData(event.currentTarget);
        const url = 'http://127.0.0.1:8000/api/v1/tests/complete';
        const response = await fetch(url
            , {
                method: 'POST',
                body: formData,
            }
        )
        const data = await response.json();
        console.log(data);

    }
    return (
        <form onSubmit={onSubmit}>
            {children}
        </form>
    )
}