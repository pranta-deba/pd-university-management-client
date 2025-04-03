import { Menu, Layout } from "antd";
import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { USER__ROLE } from "../../constants/role";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
const { Sider } = Layout;

const Sidebar = () => {
  const role = "admin";
  let sidebarItems;

  switch (role) {
    case USER__ROLE.ADMIN:
      sidebarItems = sidebarItemsGenerator(adminPaths, USER__ROLE.ADMIN);
      break;

    case USER__ROLE.FACULTY:
      sidebarItems = sidebarItemsGenerator(facultyPaths, USER__ROLE.FACULTY);
      break;

    case USER__ROLE.STUDENT:
      sidebarItems = sidebarItemsGenerator(studentPaths, USER__ROLE.STUDENT);
      break;

    default:
      break;
  }

  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",

          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>PH Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sidebarItems}
      />
    </Sider>
  );
};

export default Sidebar;
