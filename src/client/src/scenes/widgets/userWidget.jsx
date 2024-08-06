import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "components/userImage";
  import FlexBetween from "components/flexBetween";
  import WidgetWrapper from "components/widgetWrapper";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";

  const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null);
    const { palette }
  }

