"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const CardWithInput = () => {
    const [phone, setPhone] = useState("");

    const handleSubmit = () => {
        // Create the payload object
        const payload = {
            phone: phone
        };

        // Send the POST request
        fetch("http://localhost:8000/talk", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
            
    };
    console.log(phone);
    console.log()
    return (
        <div className='mt-50 m-40 p-50'>
            <Card className="mx-auto mt-10">
                <CardContent>
                    <Input
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </CardContent>
                <CardFooter className="flex justify-end">
                    <Button onClick={handleSubmit}>Submit</Button>
                </CardFooter>
            </Card>
        </div>
    );
};

export default CardWithInput;
