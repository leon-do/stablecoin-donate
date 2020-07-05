import Link from "next/link";

const headerStyle = {
  backgroundColor: "green",
  color: "white",
  width: "100%",
  height: "100px",
};

const Header = () => (
  <div className="Header" style={headerStyle}>
    <ul>
      <li>
        <Link href="/index">
          <a>home</a>
        </Link>
      </li>
      <li>
        <Link href="/pay">
          <a>link to pay</a>
        </Link>
      </li>
    </ul>
  </div>
);

export default Header;
