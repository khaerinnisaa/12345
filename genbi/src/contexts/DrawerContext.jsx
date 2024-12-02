"use client";
import React, { createContext, useState, useContext } from "react";

const DrawerContext = createContext();

export const useDrawer = () => useContext(DrawerContext);

export const DrawerProvider = ({ children }) => {
  const drawerWidth = 240;
  const mt = 40;
  const [open, setOpen] = useState(true);
  const [loadingRoute, setLoadingRoute] = useState(false);
  const [loadingDetail, setLoadingDetail] = useState(false);
  // const [kabinetId, setKabinetId] = useState(1);

  const handleDrawerOpen = () => {
    setOpen(!open);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        drawerWidth,
        mt,
        open,
        handleDrawerOpen,
        handleDrawerClose,
        loadingRoute,
        setLoadingRoute,
        loadingDetail,
        setLoadingDetail,
        // kabinetId,
        // setKabinetId,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
};
