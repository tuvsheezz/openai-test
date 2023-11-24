type routeType = {
  key: string;
  path: string;
  textKey: string;
};

export const routes: routeType[] = [
  {
    key: "id-1",
    path: "/",
    textKey: "home",
  },
  {
    key: "id-2",
    path: "/about",
    textKey: "about",
  },
  {
    key: "id-3",
    path: "/test/1",
    textKey: "Test 1",
  },
  {
    key: "id-4",
    path: "/test/2",
    textKey: "Test 2",
  },
];
