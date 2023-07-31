import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';

export function Filters() {
    const [openBrandFilter, setOpenBrandFilter] = React.useState(true);
    const [openPriceFilter, setOpenPriceFilter] = React.useState(true);
    const [openStarsFilter, setOpenStarsFilter] = React.useState(true);

    const handleClickBrandFilter = () => {
        setOpenBrandFilter(!openBrandFilter);
    };
    const handleClickPriceFilter = () => {
        setOpenPriceFilter(!openPriceFilter);
    };
    const handleClickStarsFilter = () => {
        setOpenStarsFilter(!openStarsFilter);
    };
    return (
        <div>
            <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', p: 2 }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            >
            <ListItemButton onClick={handleClickBrandFilter}>
                <ListItemText primary="BRAND" />
                {openBrandFilter ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openBrandFilter} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormGroup sx={{pl: 4}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Mango" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="H&M" />
                    </FormGroup>
                </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={handleClickPriceFilter}>
                <ListItemText primary="PRICE RANGE" />
                {openPriceFilter ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openPriceFilter} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormGroup sx={{pl: 4}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Under 500" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="1000 to 3000" />
                    </FormGroup>
                </List>
            </Collapse>
            <Divider />
            <ListItemButton onClick={handleClickStarsFilter}>
                <ListItemText primary="RATING" />
                {openStarsFilter ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openStarsFilter} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <FormGroup sx={{pl: 4}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="5 star" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="4 star" />
                    </FormGroup>
                </List>
            </Collapse>
            </List>
        </div>
    )
}