const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;
const SECRET_KEY = 'your_secret_key'; // JWT 암호화 키

app.use(cors()); // CORS 허용 (HTML에서 요청 가능)
app.use(bodyParser.json()); // JSON 요청 파싱

// ✅ [1] 로그인 → JWT 발급
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'password') {
        const token = jwt.sign({ username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ token });
    }

    res.status(401).json({ message: "로그인 실패" });
});

// 🔒 [2] JWT 검증 미들웨어
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) return res.status(401).json({ message: "로그인이 필요합니다." });

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ message: "유효하지 않은 토큰" });
    }
};

// 🔐 [3] 보호된 API
app.get('/protected', authMiddleware, (req, res) => {
    res.json({ message: "이 페이지는 로그인한 사람만 볼 수 있습니다.", user: req.user });
});

app.listen(PORT, () => console.log(`🚀 서버 실행 중: http://localhost:${PORT}`));

