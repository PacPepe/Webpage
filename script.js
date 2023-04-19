const connectWalletButton = document.getElementById('connectWallet');
connectWalletButton.addEventListener('click', async () => {
  await loadWeb3();
  await switchToArbitrum();
  fetchHighScores();
});
