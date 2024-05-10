import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import UserTable from "./userTable";

const UserPage = () => {
  const token = useSelector((state) => state.user.token);
  console.log(token);
  const [userData, setUserData] = useState(null);
  console.log(userData);

  const getData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://sandbox.practical.me/api/user/profile",
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (!userData) {
    return;
  }

  return (
    <Box
      sx={{
        display: "flex",
        width: "100vw",
        height: "100vh",
        margin: "100px",
      }}
    >
      <div>
          <Grid>{userData && <UserTable userData={userData} />}</Grid>

      </div>
    </Box>
  );
};

export default UserPage;
