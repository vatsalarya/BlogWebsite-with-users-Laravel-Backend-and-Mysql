import {
  Flex,
  Stack,
  useColorMode,
  IconButton,
  Box,
  Image,
  Avatar,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ChevronDownIcon } from "@chakra-ui/icons";

const Navbar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      w="100vw"
      align="center"
      justify="center"
      fontSize={["md", "lg", "xl", "xl"]}
      h="7vh"
      boxShadow="md"
      p={2}
    >
      <Flex w={["100vw", "90vw", "80vw", "80vw"]} justify="space-around">
        <Box>
          <Image
            h="5vh"
            src="https://i.ibb.co/zVcCZsJ/logo.png"
            alt="Logo of Chakra-ui"
          />
        </Box>
        <Stack spacing={8} justify="center" align="center" isInline>
          <Link to="/home">Home</Link>
          <Link to="/create">Create</Link>
          <Link to="/edit">Edit</Link>
        </Stack>
        <Flex align="center" justify="center">
          {props.user ? (
            <>
              <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                  <Flex isInline>
                    <Image
                      h="2vh"
                      src="https://cdn4.buysellads.net/uu/1/100164/1630700863-2021_RHD_Sandbox_ads260x200.png"
                      alt="Logo of Chakra-ui"
                      rounded="full"
                      mr="10px"
                    />
                    {/* <Avatar
                      src="https://cdn4.buysellads.net/uu/1/100164/1630700863-2021_RHD_Sandbox_ads260x200.png"
                      h="3vh"
                      w="3vh"
                      mx="20px"
                    ></Avatar> */}
                    {props.user.first_name}
                  </Flex>
                </MenuButton>
                <MenuList>
                  {/* <MenuItem>Download</MenuItem> */}
                  <Link
                    to="/login"
                    onClick={() => localStorage.setItem("token", "")}
                  >
                    Logout
                  </Link>
                </MenuList>
              </Menu>
            </>
          ) : (
            <Link to="/login">Login</Link>
          )}
          {/* <IconButton
            rounded="full"
            ml="2vw"
            onClick={toggleColorMode}
            icon={colorMode === "light" ? "moon" : "sun"}
          >
            Change Color Mode
          </IconButton> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
