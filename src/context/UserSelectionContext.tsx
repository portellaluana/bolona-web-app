import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserSelectionContextProps {
  base: string | null;
  setBase: (base: string) => void;
  baseValue: number | null;
  setBaseValue: (value: number) => void;
  flavors: string[];
  setFlavors: (flavors: string[]) => void;
  extra: string[];
  setExtra: (extra: string[]) => void;
  extraValue: number[];
  setExtraValue: (values: number[]) => void;
  tagBase: string;
  setTagBase: (tagbase: string) => void;
}

const UserSelectionContext = createContext<UserSelectionContextProps | undefined>(undefined);

export const UserSelectionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [base, setBase] = useState<string | null>(null);
  const [baseValue, setBaseValue] = useState<number | null>(null);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [extra, setExtra] = useState<string[]>([]);
  const [extraValue, setExtraValue] = useState<number[]>([]);
  const [tagBase, setTagBase] = useState<string | null>(null);

  return (
    <UserSelectionContext.Provider value={{ base, setBase, tagBase, setTagBase, baseValue, setBaseValue, flavors, setFlavors, extra, setExtra, extraValue, setExtraValue }}>
      {children}
    </UserSelectionContext.Provider>
  );
};

export const useUserSelection = () => {
  const context = useContext(UserSelectionContext);
  if (!context) {
    throw new Error("Erro");
  }
  return context;
};
