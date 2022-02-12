import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsTransactionModalOpen] =
    useState(false);

  const handleOpenNewTransactionModal = () => {
    setIsTransactionModalOpen(true);
  };

  const handleCloseNewTransactionModal = () => {
    setIsTransactionModalOpen(false);
  };
  
  return (
    <>
      <Header handleOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
