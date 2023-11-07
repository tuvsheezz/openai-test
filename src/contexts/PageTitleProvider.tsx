import React, { createContext, ReactNode, useEffect, useState } from 'react';

const PageTitleContext = createContext<{
  title: string;
  setTitle: null | ((title: string) => void);
}>({
  title: '',
  setTitle: null,
});

const TitleContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [pageTitle, setPageTitle] = useState<string>('');

  useEffect(() => {
    document.title = pageTitle;
  }, [pageTitle]);

  return (
    <PageTitleContext.Provider
      value={{
        title: pageTitle,
        setTitle: setPageTitle,
      }}
    >
      {children}
    </PageTitleContext.Provider>
  );
};

export { PageTitleContext, TitleContextProvider };
