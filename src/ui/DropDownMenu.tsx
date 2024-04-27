import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space, Typography } from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Menu",
  },
  {
    key: "2",
    label: "Pricing",
  },
  {
    key: "3",
    label: "Blog",
  },
  {
    key: "4",
    label: "Contacts",
  },
];

const DropDownMenu: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ["3"],
    }}
  >
    <Typography.Link>
      <Space>
        X
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default DropDownMenu;
