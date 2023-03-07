// import { ComponentMeta } from "@storybook/react";
import React, { useState } from "react";
import {
  AppBar,
  Button,
  MenuList,
  MenuListItem,
  TextInput,
  Toolbar,
} from "react95";

// import logoIMG from "../assets/images/logo.png";

function Navbar() {
  const [open, setOpen] = useState(false);

  const [inputcity, setInputCity] = useState("");

  return (
    <AppBar>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        {/* <input list="brow" />
        <datalist id="brow">
          <option value="Internet Explorer" />
          <option value="Firefox" />
          <option value="Chrome" />
          <option value="Opera" />
          <option value="Safari" />
        </datalist> */}
        {/* <Select
          defaultValue={2}
          options={["afdf", "bfdsf"]}
          menuMaxHeight={400}
          variant="flat"
          width={160}
          //onChange={onChange}
          onOpen={(e) => console.log("open", e)}
          onClose={(e) => console.log("close", e)}
          onBlur={(e) => console.log("blur", e)}
          onFocus={(e) => console.log("focus", e)}
        /> */}
        <p className="nav-heading">Weather95 ☀️</p>
        <div>
          <TextInput
            style={{
              width: "20vw",
              marginRight: "7.483vw",
            }}
            placeholder="Search..."
            width={150}
            onChange={(e) => setInputCity(e.target.value)}
            value={inputcity}
          />

          {inputcity[0] && (
            <MenuList
              style={{
                position: "absolute",
                left: "39.32vw",
                top: "100%",
                width: "20vw",
              }}
              onClick={() => setInputCity(false)}
            >
              <MenuListItem>Moscow</MenuListItem>
            </MenuList>
          )}
        </div>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button onClick={() => setOpen(!open)} style={{ fontWeight: "bold" }}>
            Start
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
