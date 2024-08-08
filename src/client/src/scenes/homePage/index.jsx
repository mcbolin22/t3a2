import { Box, useMediaQuery } from "@mui/material";
import { useSelector } from "react-redux";
import Navbar from "scenes/navbar";
import UserWidget from "scenes/widgets/userWidget";
import MyPostWidget from "scenes/widgets/myPostWidget"
import PostsWidget from "scenes/widgets/postsWidget";

const HomePage = () => {
    const isNonMobileScreens = useMediaQuery("(min-width:1000px");
    const { _id, picturePath } = useSelector((state) => state.user);

    return (
        <Box>
            <Navbar />
            <Box
                width="100%"
                padding="2rem 6%"
                display={isNonMobileScreens ? "flex" : "block"}
                gap="0.5rem"
                justifyContent="space-between"
            >
                <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
                    <UserWidget userId={_id} picturePath={picturePath} />
                </Box>
                <Box 
                    flexBasis={isNonMobileScreens ? "42%" : undefined}
                    mt={isNonMobileScreens ? undefined : "2rem"}
                >
                    <MyPostWidget picturePath={picturePath} />
                    <PostsWidget userId={_id} />
                </Box>
                {isNonMobileScreens && (
                    <Box flexBasis="26%">

                    </Box>
                )}
            </Box>
        </Box>
    )
}

export default HomePage;

// import { Box, useMediaQuery } from "@mui/material";
// import { useSelector } from "react-redux";
// import Navbar from "scenes/navbar";
// import UserWidget from "scenes/widgets/userWidget";
// import MyPostWidget from "scenes/widgets/myPostWidget";
// import PostWidget from "scenes/widgets/postWidget";

// const HomePage = () => {
//     const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
//     const { _id, picturePath } = useSelector((state) => state.user);

//     // Log the user data to ensure it's being retrieved correctly
//     console.log('User data:', { _id, picturePath });

//     // Assuming you have post data to pass to PostWidget
//     // const post = {
//     //     postId: '123',
//     //     postUserId: '456',
//     //     name: 'John Doe',
//     //     description: 'This is a post description',
//     //     location: 'New York',
//     //     picturePath: 'path/to/picture.jpg',
//     //     userPicturePath: 'path/to/userPicture.jpg',
//     //     likes: { '66b2fa375215a991c58a1e43': true },
//     //     comments: ['Nice post!', 'Great job!'],
//     // };

//     // Log the post data to ensure it's being passed correctly
//     console.log('Post data being passed to PostWidget:', post);

//     return (
//         <Box>
//             <Navbar />
//             <Box
//                 width="100%"
//                 padding="2rem 6%"
//                 display={isNonMobileScreens ? "flex" : "block"}
//                 gap="0.5rem"
//                 justifyContent="space-between"
//             >
//                 <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
//                     <UserWidget userId={_id} picturePath={picturePath} />
//                 </Box>
//                 <Box 
//                     flexBasis={isNonMobileScreens ? "42%" : undefined}
//                     mt={isNonMobileScreens ? undefined : "2rem"}
//                 >
//                     <MyPostWidget picturePath={picturePath} />
//                     <PostWidget
//                         postId={post.postId}
//                         postUserId={post.postUserId}
//                         name={post.name}
//                         description={post.description}
//                         location={post.location}
//                         picturePath={post.picturePath}
//                         userPicturePath={post.userPicturePath}
//                         likes={post.likes}
//                         comments={post.comments}
//                     />
//                 </Box>
//                 {isNonMobileScreens && (
//                     <Box flexBasis="26%">

//                     </Box>
//                 )}
//             </Box>
//         </Box>
//     );
// };

// export default HomePage;