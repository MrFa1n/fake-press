import { Button } from "@shared/ui/Button";
import { NavLink } from "react-router-dom";

interface Tab {
  label: string;
  path: string;
}

export const UserTabs = () => {
  const min = 1;
  const max = 10;
  const userId = Math.floor(Math.random() * (max - min + 1)) + min;

  const tabs: Tab[] = [
    { label: "Посты", path: "/posts" },
    { label: "Альбомы", path: `/albums/${userId}/photos` },
    { label: "Задачи", path: `/users/${userId}/todos` },
    { label: "Пользователи", path: `/users` },
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
