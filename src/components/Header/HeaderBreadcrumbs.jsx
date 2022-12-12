import { Breadcrumbs, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useData } from '../../hooks/useData'

export const HeaderBreadcrumbs = () => {

  const { palette: { primary, secondary} } = useTheme()
  const location = useLocation()
  const { getProduct } = useData()
  
  const [paths, setPaths] = useState([])
  const [pathsDescriptions, setPathsDescriptions] = useState([])

  useEffect(() => {
    const paths = location.pathname.split('/').filter(path => path !== '')
    setPaths(paths)
    getDescriptions(paths)
  }, [location])
  
  const getDescriptions = async (paths) => {
    if(paths[0] === 'product'){
      const { description } = await getProduct(paths[1])
      paths[1] = description
      setPathsDescriptions(paths)
    }
  }
  
  const getPathBreadcrumbs = (index) => {
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
                backgroundColor: secondary.main,
                color: secondary.contrastText,
                paddingTop: "4px",
                paddingBottom: "4px",
              },
            }}
          >
            <Link
              to={getPathBreadcrumbs(index)}
            >
              {pathsDescriptions[index]}
            </Link>
          </Box>
 
        ))
      }
    </Breadcrumbs>
  )
}

