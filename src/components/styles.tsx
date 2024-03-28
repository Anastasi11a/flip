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
        height: "100vh",
    },
    heading: { 
        marginTop: "4rem", 
        marginBottom: "3rem", 
        textAlign: "center", 
        color: "#4A5568", 
        fontSize: "2rem",
    },
    flexContainer: { 
        alignItems: "center", 
        justifyContent: "center", 
        height: "60vh",
        width: "40vw",
        padding: "1rem",
        fontSize: "1.8rem",
    },
    selectContainer: {
        marginBottom: "0.5rem", 
        textAlign: "center",
        backgroundColor: "#2B6CB0",
        color: "white",
        fontSize: "1.4rem",
        fontWeight: "bold",
    },
    option: {
        backgroundColor: "#BEE3F8",
        color: "#2B6CB0",
        fontSize: "1rem",
    },
    boxContainerFront: { 
        backgroundColor: "#4A5568",
        color: "white", 
        borderRadius: "0.5rem", 
        fontSize: "1.8rem" 
    },
    boxContainerBack: { 
        backgroundColor: "#276749",
        color: "white", 
        borderRadius: "0.5rem", 
        fontSize: "1.8rem",
    },
};