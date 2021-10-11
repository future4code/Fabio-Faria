const Header = (props) => {
  return (
    <div>
      <h1>Header</h1>
      <button onClick={() => props.changePage("homePage")}>Home</button>
    </div>
  );
};

export default Header;
