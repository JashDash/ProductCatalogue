import * as React from 'react';
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
    palette: {
        primary: {
            main: '#6B6B6B',
            light: '#ffffff'
    },
  }});

export function SearchBar() {
    const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        console.log(event.target.value);
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
                    margin:'10% 50%', 
                    transform: 'translate(-50%, -50%)', 
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