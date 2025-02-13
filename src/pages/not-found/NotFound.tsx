import { Box, Button, Container, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

import { PUBLIC_ROUTES, SEO_CONFIG } from "@/shared/config"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <Container>
      <title>{SEO_CONFIG.NOT_FOUND.title}</title>
      <meta name="description" content={SEO_CONFIG.NOT_FOUND.description} />
      <Box sx={{ my: 4, textAlign: "center" }}>
        <Typography variant="h1" color="primary" sx={{ fontWeight: 700 }}>
          404
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sorry, the page you are looking for does not exist or has been moved.
        </Typography>
        <Button variant="contained" size="large" onClick={() => navigate(PUBLIC_ROUTES.HOME)}>
          Back to Home
        </Button>
      </Box>
    </Container>
  )
}

export { NotFound }
