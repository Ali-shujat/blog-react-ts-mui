import { ThemeProvider } from '@emotion/react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { AppBar, Box, Button, Container, CssBaseline, Stack, Toolbar, Typography } from '@mui/material';
import Tab from '@mui/material/Tab';
import axios from "axios";
import { useEffect, useState } from 'react';
import { theme } from '../shared/myTheme';
import Post from './Post';
import { IPost } from './types';


function Posts() {
    const [value, setValue] = useState('1');
    const [post, setPost] = useState<IPost[]>(
        [{
            id: 1,
            title: "His mother had always taught him",
            body: "His mother had always taught him not to ever think of himself as better than others.",
            userId: 9,
            tags: [
                "history",
                "american",
                "crime"
            ],
            reactions: 2
        }]
    );

    useEffect(() => {
        axios.get("https://dummyjson.com/posts")
            .then((response) => {
                setPost((data) => {
                    console.log(data)
                    return response.data.posts;
                });
            })
            .catch((error) => {
                if (error.response) {
                    console.log(error.response.data);
                }
            });
    }, []);
    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6" color="inherit" noWrap>
                            Salt React Blog Post - TypeScript Addon
                        </Typography>
                    </Toolbar>
                </AppBar>
                <main>
                    {/* Hero unit */}
                    <Box
                        sx={{
                            bgcolor: 'background.paper',
                            pt: 6,
                            pb: 4,
                        }}
                    >
                        <Container maxWidth="sm">
                            <Typography
                                component="h1"
                                variant="h2"
                                align="center"
                                color="text.primary"
                                gutterBottom
                            >
                                Blog
                            </Typography>
                            <Stack
                                sx={{ pt: 4 }}
                                direction="row"
                                spacing={2}
                                justifyContent="center"
                            >
                                <Button variant="contained">Add Post</Button>

                            </Stack>
                            <Box sx={{ width: '100%', typography: 'body1', pt: 4 }}>

                            </Box>
                        </Container>
                    </Box>
                    <Container sx={{ py: 8 }} maxWidth="md">

                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider', alignContent: 'center' }}>
                                <TabList onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="History" value="1" />
                                    <Tab label="French" value="2" />
                                    <Tab label="Crime" value="3" />
                                    <Tab label="American" value="4" />
                                    <Tab label="Fiction" value="5" />
                                </TabList>
                            </Box>
                            <TabPanel value="1">
                                <div>
                                    {post.map((record) => (
                                        (record.tags[0] === 'history' || record.tags[1] === 'history' || record.tags[3] === 'history')
                                            ? (<Post
                                                id={record.id}
                                                title={record.title}
                                                body={record.body}
                                                userId={record.userId}
                                                tags={record.tags}
                                                reactions={record.reactions} />)
                                            : null
                                    ))}
                                </div>
                            </TabPanel>
                            <TabPanel value="2">
                                {post.map((record) => {
                                    return (
                                        (record.tags[0] === 'french' || record.tags[1] === 'french' || record.tags[3] === 'french')
                                            ? (
                                                <Post
                                                    id={record.id}
                                                    title={record.title}
                                                    body={record.body}
                                                    userId={record.userId}
                                                    tags={record.tags}
                                                    reactions={record.reactions} />
                                            )
                                            : null
                                    );
                                })}
                            </TabPanel>
                            <TabPanel value="3"> {post.map((record) => {
                                return (
                                    (record.tags[0] === 'crime' || record.tags[1] === 'crime' || record.tags[3] === 'crime')
                                        ? (
                                            <Post
                                                id={record.id}
                                                title={record.title}
                                                body={record.body}
                                                userId={record.userId}
                                                tags={record.tags}
                                                reactions={record.reactions} />
                                        )
                                        : null
                                );
                            })}</TabPanel>
                            <TabPanel value="4"> {post.map((record) => {
                                return (
                                    (record.tags[0] === 'american' || record.tags[1] === 'american' || record.tags[3] === 'american')
                                        ? (
                                            <Post
                                                id={record.id}
                                                title={record.title}
                                                body={record.body}
                                                userId={record.userId}
                                                tags={record.tags}
                                                reactions={record.reactions} />
                                        )
                                        : null
                                );
                            })}</TabPanel>
                            <TabPanel value="5"> {post.map((record) => {
                                return (
                                    (record.tags[0] === 'fiction' || record.tags[1] === 'fiction' || record.tags[3] === 'fiction')
                                        ? (
                                            <Post
                                                id={record.id}
                                                title={record.title}
                                                body={record.body}
                                                userId={record.userId}
                                                tags={record.tags}
                                                reactions={record.reactions} />
                                        )
                                        : null
                                );
                            })}</TabPanel>
                        </TabContext>
                    </Container>

                    {/* mapping */}

                    <Container sx={{ py: 8 }} maxWidth="md">
                        {/* End hero unit */}
                        {/* <Grid container spacing={1}>
                            {Post.map((card) => (
                                <Grid item key={card.id} xs={12} sm={12} md={12}>
                                    <Card
                                        sx={{
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column', gap: 2,
                                            borderRadius: 2,
                                            color: 'indigo',
                                            boxShadow: '2',
                                            '&:hover': {
                                                boxShadow: `0 3px 6px 0`,
                                            },
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h3" color="indigo">
                                                Title : {card.title}
                                            </Typography>
                                            <Typography color="indigo" component="h5">
                                                Description : {card.body}
                                            </Typography>

                                        </CardContent>

                                        <CardActions disableSpacing={true} sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center"
                                        }}>
                                            <IconButton aria-label="add to favorites">
                                                {card.tags[0]} | {card.tags[1]} | {card.tags[2]}
                                            </IconButton>
                                            <IconButton><ShareIcon /></IconButton>
                                            <IconButton>
                                                <FavoriteIcon />{card.reactions}
                                            </IconButton>

                                        </CardActions>

                                    </Card>
                                </Grid>
                            ))}
                        </Grid> */}
                    </Container>
                </main>

                {/* Footer */}
                <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                    <Typography variant="h6" align="center" gutterBottom>
                        Contact us
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        align="center"
                        color="text.secondary"
                        component="p"
                    >
                        © SHUJAT ALI 2023
                    </Typography>
                </Box>
                {/* End footer */}
            </ThemeProvider>
        </>

    )
}

export default Posts