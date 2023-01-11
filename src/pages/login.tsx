import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import {Container, Box} from '@mui/material';



function LoginPage() {

    const { handleSubmit, register } = useForm<{email: string}>();
    const router = useRouter();

    // const { mutate, error } = trpc.users.login.useMutation({
    //     onError: (error) => {

    //     },
    //     onSuccess: () => {
    //         router.push("/login");
    //     }
    // })

    function onSubmit(values: {email: string}) {
        console.log("login clicked")
        // mutate(values)
    }

    return (
        <Container sx={{
            width: "100%",
 height: "100%", backgroundColor: '#fafafa',
            }}>
            <Box sx={{ width: 300, height: 300, backgroundColor: '#ffffff', border: "solid gray 1px"}}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <p className="text-2xl text-center">Login</p>
                    <input type="email" placeholder="jane.doe@example.com" {...register('email')}/>
                    <br/>
                    <button type="submit">Login</button>
                </form>
                <Link href={"/register"}>Don't have an account? Sign up here</Link>
            </Box>
        </Container>
    )
}

export default LoginPage