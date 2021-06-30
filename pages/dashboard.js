import React, { useState } from "react";
import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

import {
  FiHome,
  FiPieChart,
  FiDollarSign,
  FiBox,
  FiCalendar,
  FiChevronDown,
  FiChevronUp,
  FiPlus,
  FiCreditCard,
  FiSearch,
  FiBell,
} from "react-icons/fi";

import MyChart from "../components/MyChart";

const Dashboard = () => {
  const [display, changeDisplay] = useState(false);
  const [creditCard, changeCreditCard] = useState(1);

  return (
    <Flex
      h={[null, null, "100vh"]}
      maxW="2000px"
      direction={["column", "column", "row"]}
      overflow="hidden"
    >
      {/* Column 1 */}
      <Flex
        w={["100%", "100%", "10%", "15%", "15%"]}
        align="center"
        direction="column"
        bgColor="#020202"
        color="#fff"
        h={[null, null, "100vh"]}
      >
        <Flex direction="column" justify="space-between" h="100%">
          <Flex direction="column" as="nav">
            <Heading
              mt={50}
              mb={[25, 50, 100]}
              fontSize={["4xl", "4xl", "md", "4xl", "4xl"]}
              letterSpacing="tight"
              alignSelf="center"
            >
              Rise.
            </Heading>
            <Flex
              direction={["row", "row", "column"]}
              align={["center", "center", "center", "flex-start", "flex-start"]}
              justify="center"
            >
              <Flex className="sidebar-items">
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon
                    as={FiHome}
                    fontSize="2xl"
                    className="active-icon"
                  ></Icon>
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  mx={[5, 5, 0, 0, 0]}
                  display={["flex", "flex", "none", "flex", "flex"]}
                >
                  <Text className="active">Home</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiPieChart} fontSize="2xl"></Icon>
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                  mx={[5, 5, 0, 0, 0]}
                >
                  <Text>Credit</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiDollarSign} fontSize="2xl"></Icon>
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                  mx={[5, 5, 0, 0, 0]}
                >
                  <Text>Wallet</Text>
                </Link>
              </Flex>

              <Flex className="sidebar-items">
                <Link display={["none", "none", "flex", "flex", "flex"]}>
                  <Icon as={FiBox} fontSize="2xl"></Icon>
                </Link>
                <Link
                  _hover={{ textDecor: "none" }}
                  display={["flex", "flex", "none", "flex", "flex"]}
                  mx={[5, 5, 0, 0, 0]}
                >
                  <Text>Services</Text>
                </Link>
              </Flex>
            </Flex>
          </Flex>
          <Flex direction="column" align="center" mt={5} mb={10}>
            <Avatar src="https://i.pravatar.cc/150?img=45" my={2} />
            <Text textAlign="center">Calvin West</Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Column 2 */}
      <Flex
        w={["100%", "100%", "60%", "60%", "55%"]}
        direction="column"
        p="3%"
        minH="100vh"
        overflow="auto"
      >
        <Heading fontWeight="normal" mb={4}>
          Welcome Back,
          <Flex fontWeight="bold" display="inline-flex">
            Nishad
          </Flex>
        </Heading>
        <Text color="gray" fontSize="sm">
          My Balance
        </Text>
        <Text fontWeight="bold" fontSize="2xl">
          $87632.65
        </Text>
        <MyChart />
        <Flex justify="space-between" mt={8}>
          <Flex align="flex-end">
            <Heading as="h2" size="lg" letterSpacing="tight">
              Transactions
            </Heading>
            <Text color="gray" ml="4" fontSize="sm">
              Apr 2021
            </Text>
          </Flex>
          <IconButton icon={<FiCalendar />} />
        </Flex>
        <Flex direction="column">
          <Flex overflow="auto">
            <Table variant="unstyled" mt={4}>
              <Thead>
                <Tr color="gray">
                  <Th>Name of transaction</Th>
                  <Th>Category</Th>
                  <Th isNumeric>Cashback</Th>
                  <Th isNumeric>Amount</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        src="https://i.pravatar.cc/150?img=31"
                        size="sm"
                        mr={3}
                      />
                      <Flex direction="column">
                        <Heading size="sm" letterSpacing="tight">
                          Amazon
                        </Heading>
                        <Text color="gray" fontSize="sm">
                          Apr 24, 2021 at 1:40pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Electronic Devices</Td>
                  <Td isNumeric>$21</Td>
                  <Td isNumeric>
                    {" "}
                    <Text fontWeight="bold" display="inline-table">
                      $242
                    </Text>
                    .00{" "}
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        mr={2}
                        src="https://i.pravatar.cc/150?img=33"
                      />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          Starbucks
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 22, 2021 at 2:43pm
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Cafe and restaurant</Td>
                  <Td isNumeric>+$23</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$32
                    </Text>
                    .00
                  </Td>
                </Tr>
                <Tr>
                  <Td>
                    <Flex align="center">
                      <Avatar
                        size="sm"
                        mr={2}
                        src="https://i.pravatar.cc/150?img=32"
                      />
                      <Flex flexDir="column">
                        <Heading size="sm" letterSpacing="tight">
                          YouTube
                        </Heading>
                        <Text fontSize="sm" color="gray">
                          Apr 13, 2021 at 11:23am
                        </Text>
                      </Flex>
                    </Flex>
                  </Td>
                  <Td>Social Media</Td>
                  <Td isNumeric>+$4</Td>
                  <Td isNumeric>
                    <Text fontWeight="bold" display="inline-table">
                      -$112
                    </Text>
                    .00
                  </Td>
                </Tr>
                {display && (
                  <>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar
                            src="https://i.pravatar.cc/150?img=31"
                            size="sm"
                            mr={3}
                          />
                          <Flex direction="column">
                            <Heading size="sm" letterSpacing="tight">
                              Amazon
                            </Heading>
                            <Text color="gray" fontSize="sm">
                              Apr 24, 2021 at 1:40pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Electronic Devices</Td>
                      <Td isNumeric>$21</Td>
                      <Td isNumeric>
                        {" "}
                        <Text fontWeight="bold" display="inline-table">
                          $242
                        </Text>
                        .00{" "}
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar
                            size="sm"
                            mr={2}
                            src="https://i.pravatar.cc/150?img=33"
                          />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              Starbucks
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 22, 2021 at 2:43pm
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Cafe and restaurant</Td>
                      <Td isNumeric>+$23</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$32
                        </Text>
                        .00
                      </Td>
                    </Tr>
                    <Tr>
                      <Td>
                        <Flex align="center">
                          <Avatar
                            size="sm"
                            mr={2}
                            src="https://i.pravatar.cc/150?img=32"
                          />
                          <Flex flexDir="column">
                            <Heading size="sm" letterSpacing="tight">
                              YouTube
                            </Heading>
                            <Text fontSize="sm" color="gray">
                              Apr 13, 2021 at 11:23am
                            </Text>
                          </Flex>
                        </Flex>
                      </Td>
                      <Td>Social Media</Td>
                      <Td isNumeric>+$4</Td>
                      <Td isNumeric>
                        <Text fontWeight="bold" display="inline-table">
                          -$112
                        </Text>
                        .00
                      </Td>
                    </Tr>
                  </>
                )}
              </Tbody>
            </Table>
          </Flex>
          <Flex align="center" justify="center">
            <IconButton
              icon={display ? <FiChevronUp /> : <FiChevronDown />}
              onClick={() => changeDisplay(!display)}
            />
          </Flex>
        </Flex>
      </Flex>

      {/* Column 3 */}
      <Flex
        w={["100%", "100%", "30%"]}
        minW={[null, null, "300px", "300px", "400px"]}
        p="3%"
        direction="column"
        bgColor="#f5f5f5"
        overflow="auto"
      >
        <Flex alignContent="center">
          <InputGroup
            bgColor="#fff"
            mb={5}
            border="none"
            borderColor="#fff"
            borderRadius="10px"
            mr={2}
          >
            <InputLeftElement pointerEvents="none">
              <FiSearch color="gray" />
            </InputLeftElement>
            <Input type="text" placeholder="Search" borderRadius="10px" />
          </InputGroup>
          <IconButton
            icon={<FiBell />}
            fontSize="sm"
            bgColor="#fff"
            borderRadius="50%"
            p="10px"
          />
          <Flex
            bgColor="#B57295"
            borderRadius="50%"
            w={30}
            h={25}
            align="center"
            justify="center"
            color="#fff"
            ml="-3"
            mt="-3"
            zIndex="100"
            fontSize="xs"
          >
            2
          </Flex>
        </Flex>
        <Heading letterSpacing="tight">My Cards</Heading>
        {creditCard === 1 && (
          <Box
            w="100%"
            h="180px"
            bgGradient="linear(to-t,#B57295, #29259A)"
            borderRadius="25px"
            mt={4}
          >
            <Flex
              justify="space-between"
              direction="column"
              h="100%"
              p="1em"
              color="#fff"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex direction="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FiCreditCard} />
                  <Text ml={2}>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex justify="space-between" align="flex-end">
                <Flex direction="column">
                  <Flex justify="space-between" fontSize="xs">
                    <Text textTransform="uppercase">valid thru</Text>{" "}
                    <Text display="inline-flex" ml={3}>
                      CVV
                    </Text>{" "}
                  </Flex>

                  <Flex justify="space-between">
                    <Text>12/23 </Text>
                    <Text display="inline-flex">***</Text>{" "}
                  </Flex>
                </Flex>
                <Icon alignSelf="flex-end" as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}

        {creditCard === 2 && (
          <Box
            w="100%"
            h="180px"
            bgGradient="linear(to-t,#f00, #29259A)"
            borderRadius="25px"
            mt={4}
          >
            <Flex
              justify="space-between"
              direction="column"
              h="100%"
              p="1em"
              color="#fff"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex direction="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FiCreditCard} />
                  <Text ml={2}>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex justify="space-between" align="flex-end">
                <Flex direction="column">
                  <Flex justify="space-between" fontSize="xs">
                    <Text textTransform="uppercase">valid thru</Text>{" "}
                    <Text display="inline-flex" ml={3}>
                      CVV
                    </Text>{" "}
                  </Flex>

                  <Flex justify="space-between">
                    <Text>12/23 </Text>
                    <Text display="inline-flex">***</Text>{" "}
                  </Flex>
                </Flex>
                <Icon alignSelf="flex-end" as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}

        {creditCard === 3 && (
          <Box
            w="100%"
            h="180px"
            bgGradient="linear(to-t,#0f0, #29259A)"
            borderRadius="25px"
            mt={4}
          >
            <Flex
              justify="space-between"
              direction="column"
              h="100%"
              p="1em"
              color="#fff"
            >
              <Flex justify="space-between" w="100%" align="flex-start">
                <Flex direction="column">
                  <Text color="gray.400">Current Balance</Text>
                  <Text fontWeight="bold" fontSize="xl">
                    $5,750.20
                  </Text>
                </Flex>
                <Flex align="center">
                  <Icon as={FiCreditCard} />
                  <Text ml={2}>Rise.</Text>
                </Flex>
              </Flex>
              <Text mb={4}>**** **** **** 1289</Text>
              <Flex justify="space-between" align="flex-end">
                <Flex direction="column">
                  <Flex justify="space-between" fontSize="xs">
                    <Text textTransform="uppercase">valid thru</Text>{" "}
                    <Text display="inline-flex" ml={3}>
                      CVV
                    </Text>{" "}
                  </Flex>

                  <Flex justify="space-between">
                    <Text>12/23 </Text>
                    <Text display="inline-flex">***</Text>{" "}
                  </Flex>
                </Flex>
                <Icon alignSelf="flex-end" as={FiCreditCard} />
              </Flex>
            </Flex>
          </Box>
        )}
        <Flex justify="center" mt="4">
          <Button
            bgColor={creditCard === 1 ? "gray.600" : "gray.400"}
            size="xs"
            mx={2}
            onClick={() => changeCreditCard(1)}
          />
          <Button
            bgColor={creditCard === 2 ? "gray.600" : "gray.400"}
            size="xs"
            mx={2}
            onClick={() => changeCreditCard(2)}
          />
          <Button
            bgColor={creditCard === 3 ? "gray.600" : "gray.400"}
            size="xs"
            mx={2}
            onClick={() => changeCreditCard(3)}
          />
        </Flex>
        <Flex direction="column">
          <Flex justify="space-between" my={2}>
            <Text>Balance</Text>
            <Text fontWeight="bold">$140.42</Text>
          </Flex>
          <Flex justify="space-between" my={2}>
            <Text>Credit Limit</Text>
            <Text fontWeight="bold">$150.00</Text>
          </Flex>
        </Flex>
        <Heading fontSize="xl" mt={4}>
          Send money to
        </Heading>
        <Flex>
          <AvatarGroup size="md" max={3} mt={4}>
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
          <Avatar
            icon={<FiPlus />}
            alignSelf="flex-end"
            color="#fff"
            ml="4"
            bgColor="gray.300"
          />
        </Flex>
        <Text mt={10} mb={2} color="gray.500">
          Card number
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiCreditCard />
          </InputLeftElement>
          <Input placeholder="xxxx xxxx xxxx xxxx" borderRadius="5" />
        </InputGroup>
        <Text mt={5} mb={2} color="gray.500">
          Sum
        </Text>
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <FiDollarSign />
          </InputLeftElement>
          <Input placeholder="130.00" borderRadius="5" />
        </InputGroup>
        <Button
          p={7}
          borderRadius="15px"
          bgColor="blackAlpha.900"
          color="#fff"
          mt="6"
        >
          Send money{" "}
        </Button>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
