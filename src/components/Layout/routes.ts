type routeType = {
  key: string;
  path: string;
  text: string;
};

export const routes: routeType[] = [
  {
    key: "id-1",
    path: "/",
    text: "Home",
  },
  {
    key: "id-2",
    path: "/about",
    text: "About",
  },
  {
    key: "id-3",
    path: "/test/1",
    text: "Test 1",
  },
  {
    key: "id-4",
    path: "/test/2",
    text: "Test 2",
  },
];
