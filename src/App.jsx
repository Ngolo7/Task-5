import Header from "./header";
import Profile from "./profile";
import Button from "./button";
import Footer from "./footer";
function App() {
  return (
    <>
      <Header title="Welcome to React Props sample" />
      <Profile name="Durga Gurung" age={28} bio="Software Developer" />
      <Button label="Click Me" />
      <Footer />
    </>
  );
}

export default App;
