import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import useDarkSide from '../config/useDarkMode';
import { Switch } from 'antd';
import { useTranslation } from 'react-i18next';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

export default function BasicMenu() {
    const { i18n } = useTranslation()
    const [, toggleTheme] = useDarkSide()
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                color='black'
                slotProps={{
                    list: {
                        'aria-labelledby': 'basic-button',
                    },
                }}
            >
                <MenuItem onClick={handleClose}>
                    <Link to={"/"}>
                        Home
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/services"}>
                        Services
                    </Link>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Link to={"/about"}>
                        About us
                    </Link>
                </MenuItem>
                <MenuItem>
                    🌛
                    <Switch defaultChecked onChange={toggleTheme} />
                    ☀️
                </MenuItem>
                <MenuItem>
                 
                    <FormControl fullWidth>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={i18n.language}
                            // label="Language"
                            onChange={(e)=>i18n.changeLanguage(e.target.value)}
                        >
                            <MenuItem value={"en"}>English</MenuItem>
                            <MenuItem value={"ru"}>Russian</MenuItem>
                            <MenuItem value={"tj"}>Tajik</MenuItem>
                        </Select>
                    </FormControl>
                </MenuItem>
            </Menu>
        </div>
    );
}