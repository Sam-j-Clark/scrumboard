import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { CreateUserInput } from "../schema/user.schema"
import { trpc } from "../utils/trpc"


function RegisterPage() {

    const { handleSubmit, register } = useForm<CreateUserInput>();
    const router = useRouter();

    const { mutate, error } = trpc.users.register.useMutation({
        onSuccess: () => {
            router.push("/login");
        }
    })

    function onSubmit(values: CreateUserInput) {
        console.log(values)
        mutate(values)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                {error && error.message}
                <input type="email" placeholder="jane.doe@example.com" {...register('email')}/>
                <input type="text" placeholder="Tom" {...register('name')}/>
                <br/>
                <button type="submit">Submit</button>
            </form>
            <Link href={"/login"}>Login</Link>
        </>
    )
}

export default RegisterPage