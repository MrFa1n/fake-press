import { Button } from "@/shared/ui/Button/Button";
import { NavLink } from "react-router-dom";

export const UserTabs = () => {
  const min = 1;
  const max = 10;
  const userId = Math.floor(Math.random() * (max - min + 1)) + min;

  const tabs = [
    { label: "Посты", path: "/posts" },
    { label: "Альбомы", path: `/albums/${userId}/photos` },
    { label: "Задачи", path: `/users/${userId}/todos` },
  ];
  return (
    <div>
      {tabs.map((tab) => (
        <NavLink key={tab.path} to={tab.path}>
          <Button variant="link">{tab.label}</Button>
        </NavLink>
      ))}
    </div>
  );
};
