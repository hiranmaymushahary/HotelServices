import express from "express";
import { validate } from "../../validators";

import { pingHandler } from "../../controllers/ping.controller";
import { pingSchema } from "../../validators/ping.validator";

const pingRouter = express.Router();

// Pass an object containing query and/or body schemas
pingRouter.get("/", validate({ query: pingSchema }), pingHandler);

pingRouter.get("/health",(req,res)=>{
    res.status(200).send("ok");
})

export default pingRouter;