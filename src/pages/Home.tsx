import { Link } from "react-router-dom";
import Button from "../components/Button";

const Home = () => {
  return (
    <Link to="/upload">
      <Button>
        Get Started
      </Button>
    </Link>
  )
}

export default Home;
