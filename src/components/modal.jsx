import React, { useState } from "react";
import Modal from "react-modal";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  textfield: {
    width: 200,
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 10,
  },
});

const InputModal = ({ handlePostData, modalIsOpen, setModalOpen }) => {
  //let [modalIsOpen, setModalOpen] = useState(true);
  let [userData, setData] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    // const { data } = await axios.post(
    //   "https://jsonplaceholder.typicode.com/posts",
    //   userData
    // );
    // data.id = previousLength + 1;
    //console.log("result", data);

    handlePostData(userData);
    setModalOpen(false);
  };
  const handleInput = (event, flag) => {
    let tempData = userData;
    if (flag === 1) tempData.name = event.target.value;
    else if (flag === 2) tempData.username = event.target.value;
    else if (flag === 3) tempData.email = event.target.value;
    else if (flag === 4) tempData.phone = event.target.value;
    else tempData.website = event.target.value;

    setData(tempData);
  };

  Modal.setAppElement("#root");

  //console.log("state", modalIsOpen);
  //console.log(modalIsOpenReal);
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        className="modal"
        onRequestClose={() => setModalOpen(false)}
      >
        <form action="#" onSubmit={handleSubmit}>
          <TextField
            onChange={(e) => handleInput(e, 1)}
            className={classes.textfield}
            required
            label="Name"
          />
          <TextField
            onChange={(e) => handleInput(e, 2)}
            className={classes.textfield}
            required
            label="Username"
          />
          <TextField
            onChange={(e) => handleInput(e, 3)}
            className={classes.textfield}
            required
            label="Email"
          />
          <TextField
            onChange={(e) => handleInput(e, 4)}
            className={classes.textfield}
            required
            label="Phone"
          />
          <TextField
            onChange={(e) => handleInput(e, 5)}
            className={classes.textfield}
            required
            label="Website"
          />
          <button className={classes.textfield}>Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default InputModal;
