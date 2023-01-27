import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import notesRoute from "./routes/notes";
import morgan from "morgan";
const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/notes", notesRoute);

// This will work for the routes that have not been set up
app.use((req, res, next) => {
    next(Error("Endpoint not found"));
});

app.use(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (error: unknown, req: Request, res: Response, next: NextFunction) => {
        console.error(error);
        let errorMessage = "Error while fetching the the notes on /";
        if (error instanceof Error) errorMessage = error.message;
        res.status(500).json({ error: errorMessage });
    }
);

export default app;
