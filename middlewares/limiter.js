import rateLimit from "express-rate-limit"

export const limiter = rateLimit({
	max: 50,
	windowMs: 10 * 60 * 1000,
	standardHeaders: "draft-7",
	message: "Too many requests",
})