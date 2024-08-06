import {
    EditOutlined,
    DeleteOutlined,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined,
  } from "@mui/icons-material";
  import {
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery,
  } from "@mui/material";
  import FlexBetween from "components/flexBetween";
  import Dropzone from "react-dropzone";
  import UserImage from "components/userImage";
  import WidgetWrapper from "components/widgetWrapper";
  import { useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { setPosts } from "state";

  const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch():
    const [is]
  }