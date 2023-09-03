import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AdminStyle from "./AdminUser.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

export default function DenseTable() {
  const [userData, setUserData] = useState([]);

 
const gettingData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "userData"));
  
      // Accumulate data into an array
      const newData = [];
      querySnapshot.forEach((doc) => {
        if (doc?.data()) {
          newData.push(doc?.data());
        } else {
          console.log("Something went wrong here");
        }
      });
  
      // Set the userData state to the accumulated array
      setUserData(newData);
    } catch (error) {
      console.log(error?.message);
    }
  };
  
  useEffect(() => {
    gettingData();
  }, []);

  return (
    <>
      <div className={AdminStyle.adminFirstContainer}>
        <h3>ADMIN PANNEL USERS</h3>
      </div>
      {/* second */}
      <div className={AdminStyle.AdminContainer}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Uid</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">Address</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {/* <TableRow
                 
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {userData?.uid}
                  </TableCell>
                  <TableCell align="right">Syed Muhemin ALi</TableCell>
                  <TableCell align="right">smuheminali@gmail.com</TableCell>
                  <TableCell align="right">abc road karachi</TableCell>
                </TableRow>; */}
            
              {userData.map((elm, id) => (
                <TableRow
                  key={id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {elm?.uid}
                  </TableCell>
                  <TableCell align="right">{elm?.name}</TableCell>
                  <TableCell align="right">{elm?.email}</TableCell>
                  <TableCell align="right">{elm?.address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}
