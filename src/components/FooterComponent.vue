<template>
  <footer class="footer">
    <div class="footer-container">
      <p>Author: Maciej Konieczny.</p>
      <a href="https://github.com/ifmcjthenknczny/what-have-i-clicked">Repository</a>
    </div>
    <div class="caution">
      Be careful on the internet. This webpage does not save your keystrokes — but it could.
    </div>
  </footer>
</template>

<style scoped>
p {
  margin: 4px 0;
  display: block;
}

.footer-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
}

@media (max-width: 768px) {
  .footer-container {
    flex-direction: column;
    gap: 0em;
  }
}

.footer {
  padding: 4px;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  font-weight: 200;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
}

.caution {
  font-size: 0.5rem;
  width: 80%;
}

a {
  color: white;
}
</style>
