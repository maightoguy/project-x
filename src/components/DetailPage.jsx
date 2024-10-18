import React, { useEffect, useState } from "react";
import { Stack, Typography, Box, Card, CardContent } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromApi } from "../utils/fetchFromApi";

const DetailPage = () => {
  const { dataId } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    fetchFromApi(`Properties/${dataId}`)
      .then((response) => response)
      .then((result) => {
        setData(result.data);
      })
      .catch((error) => console.error(error));
  }, [dataId]);

  return (
    <Stack
      direction="column"
      spacing={4}
      justifyContent="center"
      alignItems="center"
      mt={12}
    >
      {data && (
        <Stack
          direction="row"
          justifyContent="center"
          gap={3}
          sx={{ flexWrap: { xs: "wrap" } }}
        >
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
                sx={{ fontFamily: "Afacad Flux", fontSize: "14px" }}
              >
                {data.fullAddress}
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
                GPS LOCATION
              </Typography>
              <Typography
                nowrap
                sx={{ fontFamily: "Afacad Flux", fontSize: "14px" }}
              >
                {data.gpsLocation?.latitude}, {data.gpsLocation?.longitude}
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
                sx={{ fontFamily: "Afacad Flux", fontSize: "14px" }}
              >
                {data.otherDetails}
                {data.propertyType}
              </Typography>
            </Card>
          </Box>
        </Stack>
      )}

      <Stack direction="row" flexWrap="wrap" justifyContent="center" gap={4}>
        {data.propertyImages &&
          data.propertyImages.map((data, index) => (
            <Box
              key={index}
              maxWidth="320px"
              sx={{
                border: "1px solid lightgrey",
                padding: "8px",
                borderRadius: "5px",
              }}
            >
              <Card elevation={3}>
                <img src={data.url} alt={data.name} height="180px" />
                <CardContent sx={{ m: "-15px 0px -15px 0px" }}>
                  {data.name}
                </CardContent>
              </Card>
            </Box>
          ))}
      </Stack>
    </Stack>
  );
};

export default DetailPage;
