import Button from "@material-ui/core/Button";
import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import InputModal from "./modal";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    width: "90%",
    border: "1px solid black",
    marginTop: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
});

const BasicTable = ({ passData, deleteData, updateData }) => {
  const classes = useStyles();
  let [id, setId] = useState();
  let [modalFlag, setModalFlag] = useState(false);
  const handleUpdate = (id) => {
    setId(id);
    setModalFlag(true);
  };

  const postData = (userInputData) => {
    updateData(id, userInputData);
  };

  const some = (tempFlag) => {
    setModalFlag(tempFlag);
  };
  //console.log(passData);
  return (
    <div>
      <InputModal
        handlePostData={postData}
        modalIsOpen={modalFlag}
        setModalOpen={some}
      />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Username</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Phone Number</StyledTableCell>
              <StyledTableCell>Website</StyledTableCell>
              <StyledTableCell></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {passData.map((user) => (
              <StyledTableRow key={user.name}>
                <StyledTableCell component="th" scope="row">
                  {user.name}
                </StyledTableCell>
                <StyledTableCell>{user.username}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.website}</StyledTableCell>
                <StyledTableCell>
                  <Button
                    style={{ marginRight: 20 }}
                    variant="contained"
                    color="primary"
                    onClick={() => handleUpdate(user.id)}
                  >
                    Update
                  </Button>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => deleteData(user.id)}
                  >
                    Delete
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default BasicTable;
