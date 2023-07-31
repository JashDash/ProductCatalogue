import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export function ProductCard() {
    return (
        <div>
            <Card sx={{ width: 700,
                position: "absolute", 
                minWidth: 275,
                transform: 'translate(-50%, -50%)',
                marginTop:'16%', marginLeft:'50%' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                Latest Trends
                </Typography>
                <Typography sx={{ fontSize: 14 }} color="black" gutterBottom>
                Popular Suggestions
                </Typography>
            </CardContent>
            </Card>
        </div>
    )
}
