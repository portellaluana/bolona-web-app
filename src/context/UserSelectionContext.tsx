import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserSelectionContextProps {
  base: string | null;
  flavors: string[];
  setBase: (base: string) => void;
  setFlavors: (flavors: string[]) => void;
}

const UserSelectionContext = createContext<UserSelectionContextProps | undefined>(undefined);

export const UserSelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [base, setBase] = useState<string | null>(null);
  const [flavors, setFlavors] = useState<string[]>([]);

  return (
    <UserSelectionContext.Provider value={{ base, flavors, setBase, setFlavors }}>
      {children}
    </UserSelectionContext.Provider>
  );
};

export const useUserSelection = () => {
  const context = useContext(UserSelectionContext);
  if (!context) {
    throw new Error("useUserSelection must be used within a UserSelectionProvider");
  }
  return context;
};
