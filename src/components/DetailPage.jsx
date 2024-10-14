import React from "react";
import { Stack, Typography, Box, Card, CardContent } from "@mui/material";

const DetailPage = () => {
  const tileData = [
    {
      img: "./Images/img 1.jpg",
      title: "Img 1",
    },
    {
      img: "./Images/img 2.jpg",
      title: "Img 2",
    },
    {
      img: "./Images/img 3.jpg",
      title: "Img 3",
    },
    {
      img: "./Images/img 4.jpg",
      title: "Img 4",
    },

    {
      img: "./Images/img 5.jpg",
      title: "Img 5",
    },
    {
      img: "./Images/img 6.jpg",
      title: "Img 6",
    },
  ];

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      mt={12}
    >
      <Stack direction="row" spacing={2}>
        <Box width="350px">
          <Card
            elevation={6}
            sx={{
              p: "20px 0px 0px 10px",
              width: "100%",
              height: "60px",
              borderRadius: "5px",
            }}
          >
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              FULL ADDRESS
            </Typography>
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "12px",
              }}
            >
              Plot 678, Cadastral Zone, Behind Christ Victory Church, Durumi
            </Typography>
          </Card>
        </Box>
        <Box width="350px">
          <Card
            elevation={6}
            sx={{
              p: "20px 0px 0px 10px",
              width: "100%",
              height: "60px",
              borderRadius: "5px",
            }}
          >
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              GPA LOCATION
            </Typography>
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "12px",
              }}
            >
              6.34564923, 35.13413412
            </Typography>
          </Card>
        </Box>
        <Box width="350px">
          <Card
            elevation={6}
            sx={{
              p: "20px 0px 0px 10px",
              width: "100%",
              height: "60px",
              borderRadius: "5px",
            }}
          >
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              OTHER DETAILS
            </Typography>
            <Typography
              nowrap
              sx={{
                fontFamily: "Afacad Flux",
                fontSize: "12px",
              }}
            >
              Other detail goes here
            </Typography>
          </Card>
        </Box>
      </Stack>

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {tileData.map((tile, index) => (
          <Box
            key={index}
            maxWidth="320px"
            sx={{
              border: "1px solid lightgrey",
              padding: "8px",
              borderRadius: "5px",
            }}
          >
            {console.log(index)}
            <Card key={index} elevation={3}>
              <img src={tile.img} alt={tile.title}></img>
              <CardContent sx={{ m: "-15px 0px -15px 0px" }}>
                {tile.title}
              </CardContent>
            </Card>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

export default DetailPage;
