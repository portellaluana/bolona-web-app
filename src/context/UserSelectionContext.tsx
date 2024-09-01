import React, { createContext, useContext, useState, ReactNode } from "react";
interface ExtraItem {
  name: string;
  price: number;
}

interface UserSelectionContextProps {
  base: string | null;
  setBase: (base: string) => void;
  baseValue: number | null;
  setBaseValue: (value: number) => void;
  flavors: string[];
  setFlavors: (flavors: string[]) => void;
  currentFlavor: string | undefined;
  setCurrentFlavor: (flavor: string | undefined) => void;
  extra: ExtraItem[];
  setExtra: (extra: ExtraItem[]) => void;
  extraValue: number[];
  setExtraValue: (values: number[]) => void;
  tagBase: string | undefined;
  setTagBase: (tagbase: string | undefined) => void;
  orderValue: number[];
  setOrderValue: (values: number[]) => void;
}

export const UserSelectionContext = createContext<
  UserSelectionContextProps | undefined
>(undefined);

export const UserSelectionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [base, setBase] = useState<string | null>(null);
  const [baseValue, setBaseValue] = useState<number | null>(null);
  const [flavors, setFlavors] = useState<string[]>([]);
  const [currentFlavor, setCurrentFlavor] = useState<string | undefined>(
    undefined
  );
  const [extra, setExtra] = useState<ExtraItem[]>([]);
  const [extraValue, setExtraValue] = useState<number[]>([]);
  const [tagBase, setTagBase] = useState<string | undefined>(undefined);
  const [orderValue, setOrderValue] = useState<number[]>([]);

  return (
    <UserSelectionContext.Provider
      value={{
        orderValue,
        setOrderValue,
        base,
        setBase,
        tagBase,
        setTagBase,
        baseValue,
        setBaseValue,
        flavors,
        setFlavors,
        currentFlavor,
        setCurrentFlavor,
        extra,
        setExtra,
        extraValue,
        setExtraValue,
      }}
    >
      {children}
    </UserSelectionContext.Provider>
  );
};

export const useUserSelection = () => {
  const context = useContext(UserSelectionContext);
  if (!context) {
    throw new Error(
      "UserSelectionContext must be used within a UserSelectionProvider"
    );
  }
  return context;
};
