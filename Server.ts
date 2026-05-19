import express, { Application, Request, Response } from "express";
import { MyRouter } from "./routes/MyRouter";
import { StatusCodes } from "http-status-codes";

export class Server {
    private readonly app: Application;

    constructor(
        private readonly myRouter: MyRouter,
        private readonly port: number) {
            this.app = express();
            this.initialiseMiddlewares();
            this.initialiseRoutes();
            this.initialiseErrorHanlding();
        }

        private initialiseMiddlewares() {
            this.app.use(express.json());
        }

        private initialiseErrorHanlding() {
            this.app.use ((req: Request, res: Response) => {
                const requestedUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
                res.status(StatusCodes.NOT_FOUND).send("Route" + requestedUrl + "not found");
                });
        }

        private initialiseRoutes(): void {
            this.app.use("/api",this.myRouter.getRouter());
        }

        public start(): void {
            this.app.listen(this.port, () => {
                console.log(`Server listening on port ${this.port}`);
            });
        }
}