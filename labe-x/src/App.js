import Header from "./Header";
import HomePage from "./pages/HomePage";
import { useState } from "react";
import ApplicationForm from "./pages/ApplicationForm";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "homePage":
        return <HomePage changePage={handleChangePage} />;

      case "apply":
        return <ApplicationForm changePage={handleChangePage} />;

      default:
        return <HomePage changePage={handleChangePage} />;
    }
  };

  return (
    <div>
      <Header changePage={handleChangePage} />
      {renderPage()}
    </div>
  );
}

export default App;
