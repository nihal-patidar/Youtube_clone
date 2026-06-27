// middleware/requestLogger.js

const requestLogger = (req, res, next) => {
  const start = Date.now();

  console.log("\n========================================");
  console.log(`📥 ${req.method} ${req.originalUrl}`);
  console.log("========================================");

  //   console.log("🕒 Time      :", new Date().toLocaleString());
  console.log("🌐 IP        :", req.ip);
  //   console.log("🧭 Protocol  :", req.protocol);
  console.log("🏠 Host      :", req.get("host"));
  console.log("📄 User-Agent:", req.get("user-agent"));

  console.log("📌 Params    :", req.params);

  console.log("🔍 Query     :", req.query);

  console.log("📦 Body      :", req.body);

  console.log("🍪 Cookies   :", req.cookies);

  // Uncomment if you want to see all headers
  // console.log("📨 Headers   :", req.headers);

  res.on("finish", () => {
    const duration = Date.now() - start;

    console.log("----------------------------------------");
    console.log(`📤 Response  : ${res.statusCode}`);
    console.log(`⏱ Duration  : ${duration} ms`);
    console.log("========================================\n");
  });

  next();
};

export default requestLogger;
