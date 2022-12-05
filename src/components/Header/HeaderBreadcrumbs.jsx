import { Breadcrumbs, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const HeaderBreadcrumbs = () => {

  const { palette: { primary, secondary} } = useTheme()
  const location = useLocation()
  
  const [paths, setPaths] = useState([])

  useEffect(() => {
    const paths = location.pathname.split('/').filter(path => path !== '')
    setPaths(paths)
  }, [location])
  
  const getPathBreadcrumbs = 
    (index) => {
      const href = `/${paths.slice(0, index + 1).join('/')}`
      return href
    }

  return (
    <Breadcrumbs color={primary.contrastText}>
      {
        paths.map((path, index) => (
          <Box
            key={index}
            sx={{
              '& > a': {
                textDecoration: 'none',
                color: primary.contrastText,
              },
              '& > a:hover': {
                textDecoration: 'underline',
                color: secondary.light,
              },
            }}
          >
            <Link
              to={getPathBreadcrumbs(index)}
            >
              {path}
            </Link>
          </Box>
 
        ))
      }
    </Breadcrumbs>
  )
}