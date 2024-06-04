// #86535D
// mahindra 
// maruti sujuki 
// tata 
// toyota 
// skoda 
// bmw 
// kia 
// od 
// marchi dis 
// honda 
// jeguvar 

<Box sx={{ flexGrow: 0 }}>
<Tooltip title="Open settings">
    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    <Avatar>{getFirstLetter(userName)}</Avatar>
        {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
    </IconButton>
</Tooltip>
<Menu
    sx={{ mt: '45px' }}
    id="menu-appbar"
    anchorEl={anchorElUser}
    anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    keepMounted
    transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
    }}
    open={Boolean(anchorElUser)}
    onClose={handleCloseUserMenu}
>
    {settings.map((setting) => (
        <MenuItem key={setting.name} onClick={handleCloseUserMenu} component={Link} to={setting.path}>
            <Typography textAlign="center">{setting.name}</Typography>
        </MenuItem>
    ))}

</Menu>
</Box>