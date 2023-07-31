import { SearchBar} from '../components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Filters } from '../components/Filters';
import {ProductItemCard} from '../components/ProductItemCard'
export function ProductsScreen() {
    
    return (
        <div>
            <div style={{paddingTop: '3%'}}>
                <SearchBar/>
                <div style={{width: '90vw', marginTop: '5%'}}>
                    <Typography variant="h4" sx={{marginLeft:'2vw'}} gutterBottom>
                        Search Results
                    </Typography>
                    <div style={{display: 'flex', flexDirection:'row', width: '100vw'}}>
                        <div id="filters" style={{width: '15vw'}}>
                            <Filters/>
                        </div>
                        <div id="productitems" style={{display: 'flex', height:'100vh', marginLeft: '2vw'}}>
                            <ProductItemCard/>
                            <ProductItemCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}