import { CSSProperties } from "react";

export interface Styles {
    container: CSSProperties;
    heading: CSSProperties;
    flexContainer: CSSProperties;
    selectContainer: CSSProperties;
    option: CSSProperties;
    boxContainerFront: CSSProperties;
    boxContainerBack: CSSProperties;
};

export const styles: Styles = {
    container: { 
        justifyContent: "center",
        textAlign: "center", 
        minHeight: "100vh",
    },
    heading: { 
        marginTop: "2rem", 
        marginBottom: "1.5rem", 
        textAlign: "center", 
        color: "#4A5568", 
        fontSize: "1.5rem",
    },
    flexContainer: { 
        alignItems: "center", 
        justifyContent: "center", 
        minHeight: "50vh",
        width: "90%",
        padding: "0.5rem",
        fontSize: "1.2rem",
    },
    selectContainer: {
        marginBottom: "0.5rem", 
        textAlign: "center",
        backgroundColor: "#2B6CB0",
        color: "white",
        fontSize: "1.2rem",
        fontWeight: "bold",
    },
    option: {
        backgroundColor: "#BEE3F8",
        color: "#2B6CB0",
        fontSize: "1rem",
    },
    boxContainerFront: { 
        width: "300px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A5568",
        color: "white", 
        borderRadius: "0.5rem", 
        fontSize: "1.8rem" 
    },
    boxContainerBack: {
        width: "300px",
        height: "200px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center", 
        backgroundColor: "#276749",
        color: "white", 
        borderRadius: "0.5rem", 
        fontSize: "1.8rem",
    },
};