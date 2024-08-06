import {
    ManageAccountsOutlined,
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
    const { palette } = useTheme();
    const navigate = useNavigate();
    const token = useSelector((state) => state.token);
    const dark = palette.neutral.dark;
    const text = palette.text.default;

    const getUser = async () => {
        const response = await fetch(`http://localhost:3001/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUser(data);
        
    };

    useEffect(() => {
        getUser();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (!user) {
        return null;
    }

    const {
        firstName,
        lastName,
        location,
        occupation,
        viewedProfile,
        braggingRights,
        impressions,
        friends,
    } = user;

    return (
        <WidgetWrapper>
            {/* first row */}
            <FlexBetween
                gap="0.5rem"
                pb="1.1rem"
                onClick={() => navigate(`/profile/${userId}`)}
            >
                <FlexBetween gap="1rem">
                    <UserImage image={picturePath} />
                    <Box>
                        <Typography 
                            variant="h4"
                            color={dark}
                            fontWeight="500"
                            sx={{
                                "&:hover": {
                                    color: palette.primary.light,
                                    cursor: "pointer"
                                }
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography color={text}>{friends.length} friends</Typography>
                    </Box>
                    
                </FlexBetween>
                <ManageAccountsOutlined />
            </FlexBetween>

            <Divider />

            {/* second row */}
            <Box p="1rem 0">
                <Box display="flex" alignItems="center" gap="1rem" mb="0.5rem">
                    <LocationOnOutlined fontSize="large" sx={{ color: text }} />
                    <Typography color={text}>{location}</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap="1rem" >
                    <WorkOutlineOutlined fontSize="large" sx={{ color: text }} />
                    <Typography color={text}>{occupation}</Typography>
                </Box>
            </Box>

            <Divider />

            {/* third row */}
            <Box p="1rem 0">
                <FlexBetween mb="0.5rem">
                    <Typography color={text}>Who's viewed your profile?</Typography>
                    <Typography color={text} fontWeight="500">{viewedProfile}</Typography>
                </FlexBetween>
                <FlexBetween mb="0.5rem">
                    <Typography color={text}>Bragging Rights:</Typography>
                    <Typography color={text} fontWeight="500">{braggingRights}</Typography>
                </FlexBetween>
                <FlexBetween>
                <Typography color={text}>Impressions on posts:</Typography>
                <Typography color={text} fontWeight="500">{impressions}</Typography>
                </FlexBetween>

            </Box>

                            
        
    </WidgetWrapper>
    );
  };

  export default UserWidget;

