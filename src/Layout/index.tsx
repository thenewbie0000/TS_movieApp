import { Box } from "@mui/material";
import { ReactNode } from "react";

interface LayoutProps{
  children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
  return (
    <Box sx = {{
      backgroundColor: "#10141F"
    }}>

    </Box>
  )
}

export default Layout