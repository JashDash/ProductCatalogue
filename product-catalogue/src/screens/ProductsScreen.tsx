import { SearchBar} from '../components';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Filters } from '../components/Filters';
export function ProductsScreen() {
    
    return (
        <div>
            <div style={{paddingTop: '3%'}}>
                <SearchBar/>
                <div style={{width: '100vw', marginTop: '5%'}}>
                    <Typography variant="h4" sx={{marginLeft:'2vw'}} gutterBottom>
                        Search Results
                    </Typography>
                    <div style={{display: 'flex', flexDirection:'row', width: '100vw'}}>
                        <div id="filters" style={{width: '18vw', height:'10vh'}}>
                            <Filters/>
                        </div>
                        <div id="products" style={{width: '88vw', height:'10vh'}}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}