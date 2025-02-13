import { AppBar, Button, Container, Link, Toolbar } from "@mui/material"
import { Outlet, Link as RouterLink } from "react-router-dom"

import { Cart } from "@/entities/cart"
import { PUBLIC_ROUTES } from "@/shared/config"

/** Головний layout для сторінок з шапкою та підвалом */
const Layout = () => {
  return (
    <Container maxWidth="md" sx={{ marginY: 4 }}>
      <AppBar position="static" variant="outlined" color="transparent">
        <Toolbar sx={{ justifyContent: "center", gap: 2 }}>
          <Button variant="text" color="inherit">
            <Link component={RouterLink} to={PUBLIC_ROUTES.HOME} color="inherit" underline="none">
              Home
            </Link>
          </Button>
          <Button variant="text" color="inherit">
            <Link
              component={RouterLink}
              to={PUBLIC_ROUTES.FAVORITES}
              color="inherit"
              underline="none"
            >
              Favorites
            </Link>
          </Button>
          <Cart />
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  )
}

export { Layout }
