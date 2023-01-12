import Link from "next/link"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"
import {Avatar, Container, Box, Grid, Card, CardContent, Typography, TextField, Button, Icon} from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import GitHubIcon from '@mui/icons-material/GitHub';

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
        <Container maxWidth="xl" 
             component="main"
            sx={{backgroundColor: '#fafafa', p: "0px !important"}}
            
            >
                <Grid container
                    spacing={0}
                    direction="row"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <Grid item xs={3} >
                        <Card variant="outlined" sx={{height: "480px", boxShadow: 2}}>
                            <CardContent sx={{height: "calc(100% - 32px)", paddingBottom: "16px !important"}}>
                            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}} paddingY="28px">
                                    <Avatar sx={{ bgcolor: "purple" }}>
                                        <LockOpenIcon />
                                    </Avatar>
                                </Box>
                                <Typography variant="h4" color="default" align="center">Projects</Typography>                                
                                <Box component="form" onSubmit={handleSubmit(onSubmit)} paddingY="14px">
                                    <TextField {...register('email')}
                                        fullWidth
                                        id="email"
                                        label="Email"
                                        placeholder="jane.doe@example.com"
                                        type="email"
                                        sx={{marginY: "10px"}}/>
                                    <Button variant="contained" color="primary" type="submit" fullWidth>
                                        Login
                                    </Button>
                                    <Link href={"/register"}>
                                        <Typography variant="body1" color="initial" align="center" marginTop="8px">Don't have an account? Sign up here</Typography>
                                    </Link>
                                </Box>
                                <Box paddingTop="48px">
                                    <Link href="https://github.com/Sam-j-Clark/scrumboard" target="_blank" style={{ textDecoration: 'none' }}>
                                        <Grid
                                            container
                                            spacing={2}
                                            direction="row"   
                                            justifyContent="center"
                                            alignItems="center"
                                            >
                                                <Grid item>
                                                    <GitHubIcon style={{color: "#333"}} fontSize="large"/>
                                                </Grid>
                                                <Grid item>
                                                    <Typography variant="h6" color="initial">Github</Typography>
                                                </Grid>
                                        </Grid>
                                    </Link>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>      
                </Grid>
        </Container>
    )
}

export default LoginPage