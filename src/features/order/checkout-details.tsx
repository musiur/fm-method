"use client"

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { actionPostCreateOrder } from "@/actions/orders/post-create-order";
import { useTransition } from "react";
import InputX from "@/components/form-x/input-x";
import SubmitX from "@/components/form-x/submit-x";

const schema = z.object({
    student_id: z.string(),
    item_type: z.string(),
    book_id: z.string(),
    course_id: z.string(),
    product_profile: z.string(),
    product_category: z.string(),
    product_name: z.string(),
    total_amount: z.number(),
    currency: z.string(),
    discount: z.number(),
    cus_name: z.string(),
    cus_email: z.string(),
    cus_phone: z.string(),
    cus_add1: z.string(),
    cus_city: z.string(),
    cus_country: z.string(),
    shipping_method: z.string(),
})

type TypeSchema = z.infer<typeof schema>;

export const CheckoutDetails = () => {
    const [pending, startTransition] = useTransition();
    const form = useForm<TypeSchema>({
        resolver: zodResolver(schema),
        defaultValues: {
            student_id: "1",
            item_type: "Course",
            book_id: "1",
            course_id: "30",
            product_profile: "D",
            product_category: "SD",
            product_name: "asdfasd",
            total_amount: 10,
            discount: 0,
            currency: "BDT",
            cus_name: "asdfasdf",
            cus_email: "asdfasdf",
            cus_phone: "asdfasdf",
            cus_add1: "asdfasdf",
            cus_city: "adsfadsf",
            cus_country: "asdfasdf",
            shipping_method: "asdfad"
        }
    })


    const onSubmit = async (data: TypeSchema) => {
        startTransition(async () => {
            const result = await actionPostCreateOrder(data);
        })
    }
    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <InputX name="cus_name" label="Name" placeholder="e.g. John Doe" />
                    <InputX name="cus_email" label="Email address" placeholder="e.g. john.doe@example.abc" />
                    <InputX name="cus_phone" label="Phone" />
                    <InputX name="cus_add1" label="Address" />
                    <InputX name="cus_city" label="City" />
                    <InputX name="cus_country" label="Country" />
                    <SubmitX pending={pending || form.formState.isSubmitting} text="Continue" />
                </form>
            </Form>
        </div>
    )
}