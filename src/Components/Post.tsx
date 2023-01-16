import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { Card, CardActions, CardContent, Grid, IconButton, Typography } from '@mui/material';
import { IPost } from './types';

function Post(props: IPost) {
    const { id, title, body, userId, tags, reactions } = props;

    return (
        <>
            <Grid item key={id} xs={12} sm={12} md={8}>
                <Card
                    sx={{
                        height: '100%',
                        display: 'flex',
                        m: 2,
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
                        <Typography gutterBottom component="h3" color="indigo">
                            Title : {title}
                        </Typography>
                        <Typography color="indigo" >
                            Description : {body}
                        </Typography>

                    </CardContent>

                    <CardActions disableSpacing={true} sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center"
                    }}>
                        <IconButton aria-label="add to favorites">
                            {tags[0]} | {tags[1]} | {tags[2]}
                        </IconButton>
                        <IconButton sx={{
                            '&:hover': {
                                color: "blue",
                            }
                        }}><ShareIcon /></IconButton>
                        <IconButton sx={{
                            '&:hover': {
                                color: "red",
                            }
                        }}>
                            <FavoriteIcon />{reactions}
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>

        </>
    )
}

export default Post