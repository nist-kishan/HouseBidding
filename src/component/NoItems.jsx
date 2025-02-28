import React from "react";

export default function NoItems() {
  return (
    <div style={styles.container}>
      <h2 style={styles.message}>No items available</h2>
      <p style={styles.subMessage}>Please check back later or add new items.</p>
      <button style={styles.button} onClick={() => alert("Add Item Clicked!")}>
        Add Item
      </button>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
    border: "2px dashed gray",
    borderRadius: "10px",
    maxWidth: "300px",
    margin: "50px auto",
    backgroundColor: "#f9f9f9",
  },
  message: {
    fontSize: "20px",
    color: "#333",
  },
  subMessage: {
    fontSize: "14px",
    color: "#666",
  },
  button: {
    marginTop: "10px",
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  },
};

styles.button[":hover"] = {
  backgroundColor: "#0056b3",
};
