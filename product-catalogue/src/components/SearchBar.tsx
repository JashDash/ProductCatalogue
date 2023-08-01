import * as React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { fakeCarsSuggestions, fakeCarsTrending, fakeCarsSuggestionsDisplay, fakeCarsTrendingDisplay } from "../data/DisplayCarsArray";
const theme = createTheme({
    palette: {
        primary: {
            main: '#6B6B6B',
            light: '#ffffff'
    },
  }});

export function SearchBar() {
    // SEARCH FUNCTION
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const searchTarget = event.target.value;
        const len = searchTarget.length;
        console.log('Target: '+searchTarget+' with length: '+len);
        let result = new Array();
        for (let i = 0; i < 100; i++) {
            if(fakeCarsSuggestions[i].substring(0,len) == searchTarget){
                result.push(fakeCarsSuggestions[i]);
                console.log(fakeCarsSuggestions[i]);
            }
        }
        console.log('Over');

    }
    return (
        <div>
                <ThemeProvider theme={theme}>
                <TextField
                variant='outlined'
                    id="search"
                    type="search"
                    label="Search"
                    sx={{position: 'absolute', 
                    backgroundColor: 'primary.light', 
                    margin:'0% 50%', 
                    transform: 'translate(-50%, 0%)', 
                    borderRadius: '5px',  
                    width: 600 }}
                    InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                        <SearchIcon />
                        </InputAdornment>
                    ),
                    }}
                    onChange={handleTextFieldChange}
                />
                </ThemeProvider>
        </div>
    )
}