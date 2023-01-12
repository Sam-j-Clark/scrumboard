import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import { CreateUserInput } from "../schema/user.schema"
import { trpc } from "../utils/trpc"
import { Avatar, Container, Box, Grid, Card, CardContent, Typography, TextField, Button, Icon } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';


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
        <Container maxWidth="xl"
            component="main"
            sx={{ backgroundColor: '#fafafa', p: "0px !important" }}

        >
            <Grid container
                spacing={0}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={3} >
                    <Card variant="outlined" sx={{ height: "480px", boxShadow: 2 }}>
                        <CardContent sx={{ height: "calc(100% - 32px)", paddingBottom: "16px !important" }}>
                            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} paddingY="28px">
                                <Avatar sx={{ bgcolor: "purple" }}>
                                    <LockIcon />
                                </Avatar>
                            </Box>
                            <Typography variant="h4" color="default" align="center">Projects</Typography>
                            <Box component="form" onSubmit={handleSubmit(onSubmit)} paddingY="14px">
                                <TextField {...register('name')}
                                    fullWidth
                                    id="name"
                                    label="Full name"
                                    placeholder="David"
                                    type="text"
                                    sx={{ marginTop: "10px" }} />

                                <TextField {...register('email')}
                                    fullWidth
                                    id="email"
                                    label="Email"
                                    placeholder="jane.doe@example.com"
                                    type="email"
                                    sx={{ marginY: "10px" }} />
                                <Button variant="contained" color="primary" type="submit" fullWidth>
                                    Submit
                                </Button>
                                <Link href={"/login"}>
                                    <Typography variant="body1" color="initial" align="center" marginTop="8px">
                                        Already have an account? Login here.
                                    </Typography>
                                </Link>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default RegisterPage