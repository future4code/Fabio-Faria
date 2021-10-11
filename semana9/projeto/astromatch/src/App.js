import { useState } from "react";
import UserMatch from "./components/UserMatch";
import Curtidas from "./components/Curtidas";

import { Container, VStack, Flex } from "@chakra-ui/react";

function App({ Component }) {
  const [page, setPage] = useState("home");

  const handlePageChange = (page) => {
    setPage(page);
  };

  const renderPage = () => {
    switch (page) {
      case "home":
        return <UserMatch changePage={handlePageChange} />;
      case "curtidas":
        return <Curtidas changePage={handlePageChange} />;
      default:
        return <UserMatch changePage={handlePageChange} />;
    }
  };

  return (
    <VStack w="100%">
      <Flex width="100vw" height="100%">
        <Container bg="#66ABA5" maxW="100%" maxH="100%">
          {renderPage()}
        </Container>
      </Flex>
    </VStack>
  );
}

export default App;
