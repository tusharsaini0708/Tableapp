import Button from "@material-ui/core/Button";
import "./App.css";
import FinalTable from "./components/table";
import InputModal from "./components/modal";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  let [userData, setUserData] = useState([]);
  let [modalFlag, setModalFLag] = useState(false);
  useEffect(() => {
    const some = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUserData(data);
    };
    some();
  }, []);

  const postData = async (userInputData) => {
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/posts",
      userInputData
    );
    // let temp = [...userData];
    // temp.unshift(data);
    //console.log("unnessarypostrequest");
    data.id = userData.length + 1;
    setUserData([data, ...userData]);
    //setUserData(temp);
  };

  const deleteData = (id) => {
    const tempData = userData.filter((user) => user.id !== id);
    setUserData(tempData);
  };

  const updateData = (id, data) => {
    //console.log("userData", userData);
    // let update = [...userData];
    // //console.log("update Data", update);

    // let index = update.findIndex((e) => e.id === id);
    // update[index] = data;

    setUserData((userData) =>
      userData.map((u) => (u.id === id ? { ...u, ...data } : u))
    );
  };

  const some = (tempFlag) => {
    setModalFLag(tempFlag);
  };
  return (
    <div className="App">
      <Button
        color="primary"
        variant="contained"
        onClick={() => setModalFLag(true)}
      >
        ADD ROW
      </Button>
      <InputModal
        handlePostData={postData}
        modalIsOpen={modalFlag}
        setModalOpen={some}
      />
      <FinalTable
        passData={userData}
        updateData={updateData}
        deleteData={deleteData}
      />
    </div>
  );
}

export default App;
