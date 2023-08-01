import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { LatestTrendsItemCard } from './LatestTrendsItemCard';
import { faker } from '@faker-js/faker';
  
const createCars = (num = 5) => {
    let cars = new Array();
    for (let i = 0; i < num; i++) {
        cars.push(faker.vehicle.manufacturer());
    }
    return cars;
};

let fakeCarsSuggestions = createCars(5);
let fakeCarsTrending = createCars(5);

export function ProductCard() {
    return (
        <div>
            <Card sx={{ width: 700,
                position: "absolute", 
                minWidth: 275,
                transform: 'translate(-50%, 0%)',
                marginTop:'80px', marginLeft:'50%', pl:2, pr:2, pt:1, pb:1, borderRadius: 1 }}>
            <CardContent>
                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }} color="black" gutterBottom>
                Latest Trends
                </Typography>
                <div style={{display:'flex', justifyContent: 'space-between', marginTop: 10}}>
                    {fakeCarsTrending.map((fakeCar,index)=>{
                        return <LatestTrendsItemCard manufacturer = {fakeCarsTrending[index]}/> 
                    })}
                </div>
                <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }} color="black" gutterBottom>
                Popular Suggestions
                </Typography>
                <div style={{display:'flex', flexDirection:'column' , justifyContent: 'space-between', marginTop: 10}}>
                    {fakeCarsTrending.map((fakeCar,index)=>{
                        return <Typography variant="caption" color="black" gutterBottom>{fakeCarsSuggestions[index]}</Typography> 
                    })}
                </div>
            </CardContent>
            </Card>
        </div>
    )
}
