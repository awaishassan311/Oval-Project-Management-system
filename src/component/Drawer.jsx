import React, { useState } from "react";
import { Drawer } from "antd";
const SideNav = ({ open, setOpen, showDrawer }) => {
  //   const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("Left");
  //   const showDrawer = () => {
  //     setOpen(true);
  //   };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <>
      <Drawer
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};
export default SideNav;
