import React, { createContext, ReactNode, useState } from 'react';

const ApiKeyContext = createContext<{
  apiKey: string;
  setApiKey: null | ((apiKey: string) => void);
}>({
  apiKey: '',
  setApiKey: null,
});

const ApiKeyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [apiKey, setApiKey] = useState<string>('');

  return (
    <ApiKeyContext.Provider
      value={{
        apiKey: apiKey,
        setApiKey: setApiKey,
      }}
    >
      {children}
    </ApiKeyContext.Provider>
  );
};

export { ApiKeyContext, ApiKeyContextProvider };
