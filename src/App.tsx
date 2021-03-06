import { useState } from 'react';
import Modal from 'react-modal';
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";

import { GlobalStyled } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  	const [isNewModalTransactionsOpen, setIsNewModalTransactionsOpen] = useState(false);

	function handleOpenNewTransactionModal() {
		setIsNewModalTransactionsOpen(true);
	}

	function handleCloseNewTransactionModal() {
		setIsNewModalTransactionsOpen(false);
	}

  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal
        isOpen={isNewModalTransactionsOpen} 
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyled />
    </TransactionsProvider>
  );
}
