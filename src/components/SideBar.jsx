import { Sidebar } from "flowbite-react";
import { useEffect, useState } from "react";

export default function SidebarMenu({ isOpened }) {
  const [menu, setMenu] = useState(false);

  const handlemenu = () => {
    setMenu(!menu);
  };
  useEffect(() => {
    isOpened = false;
  }, [menu]);

  return (
    <Sidebar
      aria-label="Default sidebar example"
      className={
        isOpened
          ? "sidebar-expanded"
          : menu
          ? "sidebar-collapsed"
          : "sidebar-hidden"
      }
    >
      <h1 onClick={handlemenu}>Close</h1>
    </Sidebar>
  );
}
