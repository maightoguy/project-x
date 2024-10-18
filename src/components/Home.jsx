import React, { useEffect, useState } from "react";
import { fetchFromApi } from "../utils/fetchFromApi";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { Box, TableCell } from "@material-ui/core";
import { Link } from "react-router-dom";

const Home = () => {
  const headingArr = [
    { id: "1", name: "District" },
    { id: "2", name: "Property Type" },
    { id: "3", name: "Date Captured" },
    { id: "4", name: "Photographer" },
    { id: "5", name: "Image Count" },
  ];

  const [tableData, setTableData] = useState({});

  useEffect(() => {
    fetchFromApi(`Properties/`)
      .then((data) => {
        return data;
      })
      .then((result) => {
        setTableData(result.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <Box
      color="#FFF"
      textAlign="center"
      justifyItems="center"
      backgroundColor="#000"
      mt="-25px"
    >
      <h1>Residential Accommodations</h1>
      <Box
        mt="8%"
        sx={{
          height: "100vh",
          justifySelf: "center",
          backgroundColor: "#000",
        }}
      >
        <TableContainer style={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                {headingArr.map((data) => (
                  <TableCell key={data.id}>{data.name}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.length > 0 &&
                tableData.map((data) => (
                  <TableRow key={data.id}>
                    <TableCell>{data.district}</TableCell>
                    <TableCell>{data.propertyType}</TableCell>
                    <TableCell>{data.captureDate}</TableCell>
                    <TableCell>{data.capturedBy}</TableCell>
                    <TableCell>{data.imageCount}</TableCell>
                    <Button>
                      <Link to={`/detail/${data.id}`}>Go</Link>
                    </Button>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Home;
