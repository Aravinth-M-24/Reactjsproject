import React, { useEffect, useRef, useState } from "react";

function Login() {
  const canvasRef = useRef(null);
  const [passwordShown, setPasswordShown] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Star animation setup
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    for (let i = 0; i < 100; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5 + 0.2,
      });
    }

    const animateStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#0ff";
      stars.forEach((star) => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
        star.y += star.speed;
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animateStars);
    };

    animateStars();

    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div style={styles.body}>
      <canvas id="stars" ref={canvasRef} style={styles.canvas}></canvas>

      <div style={styles.container}>
        <h2 style={styles.heading}>Login</h2>
        <form>
          <div style={styles.inputBox}>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              style={styles.input}
            />
            <label
              style={{
                ...styles.label,
                top: username ? "-10px" : "14px",
                fontSize: username ? "12px" : "15px",
                color: username ? "#0ff" : "#aaa",
              }}
            >
              Username
            </label>
          </div>

          <div style={styles.inputBox}>
            <input
              type={passwordShown ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <label
              style={{
                ...styles.label,
                top: password ? "-10px" : "14px",
                fontSize: password ? "12px" : "15px",
                color: password ? "#0ff" : "#aaa",
              }}
            >
              Password
            </label>
            <span style={styles.togglePassword} onClick={togglePassword}>
              {passwordShown ? "Hide" : "Show"}
            </span>
          </div>

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        <div style={styles.signup}>
          No account? <a href="#" style={styles.signupLink}>Register here</a>
        </div>
      </div>
    </div>
  );
}

const styles = {
  body: {
    
    height: "100vh",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    fontFamily: "'Montserrat', sans-serif",
    background: "radial-gradient(ellipse at bottom, #0f0c29, #302b63, #24243e)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 0,
    width: "100%",
    height: "75%",
  },
  container: {
    position: "relative",
    zIndex: 2,
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(15px)",
    borderRadius: "20px",
    border: "1px solid rgba(255, 255, 255, 0.1)",
    boxShadow: "0 0 30px rgba(0,255,255,0.15)",
    padding: "5vw 6vw",
    width: "90%",
    maxWidth: "400px",
    color: "#fff",
    boxSizing: "border-box",
  },
  heading: {
    textAlign: "center",
    marginBottom: "5vw",
    fontFamily: "'Orbitron', sans-serif",
    color: "#0ff",
    letterSpacing: "1px",
    fontSize: "6vw",
    maxFontSize: "28px",
  },
  inputBox: {
    position: "relative",
    marginBottom: "25px",
  },
  input: {
    width: "100%",
    padding: "12px 10px",
    border: "none",
    borderBottom: "2px solid #0ff",
    background: "transparent",
    color: "#fff",
    fontSize: "16px",
    outline: "none",
  },
  label: {
    position: "absolute",
    left: "10px",
    transition: "0.3s ease",
    pointerEvents: "none",
  },
  togglePassword: {
    position: "absolute",
    right: "10px",
    top: "14px",
    fontSize: "12px",
    cursor: "pointer",
    color: "#0ff",
  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "25px",
    background: "linear-gradient(45deg, #00f2fe, #4facfe)",
    color: "#000",
    fontWeight: "bold",
    fontSize: "16px",
    cursor: "pointer",
    transition: "0.4s ease",
  },
  signup: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "13px",
    color: "#aaa",
  },
  signupLink: {
    color: "#0ff",
    textDecoration: "none",
  },
};

export default Login;
