import React from "react";

export default function Home() {
  const handleLogin = () => {
    window.location.href = "/api/login";
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Conectar à Amazon Ads</h1>
      <button onClick={handleLogin} style={styles.button}>
        Login com Amazon
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
  button: {
    backgroundColor: "#ff9900",
    color: "#fff",
    border: "none",
    padding: "15px 30px",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};