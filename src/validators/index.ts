import { NextFunction, Request, Response } from "express";
import { ZodObject } from "zod";
import logger from "../config/logger.config";

type AnyZodObject = ZodObject<any>;



interface ValidationSchemas {
    body?: AnyZodObject;
    query?: AnyZodObject;
    params?: AnyZodObject;
}


/**
 * Validates request body, query params, and/or route params
 */
export const validate = (schemas: ValidationSchemas) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            if (schemas.body) {
                logger.info("Validating request body");
                await schemas.body.parseAsync(req.body);
            }
            if (schemas.query) {
                logger.info("Validating query params");
                await schemas.query.parseAsync(req.query);
            }
            if (schemas.params) {
                logger.info("Validating route params");
                await schemas.params.parseAsync(req.params);
            }
            next();
        } catch (error) {
            logger.error("Request validation failed");
            res.status(400).json({
                message: "Invalid request data",
                success: false,
                error: error
            });
        }
    };
};



/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request body
 */
export const validateRequestBody = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            logger.info("Validating request body");
            await schema.parseAsync(req.body);
            logger.info("Request body is valid");
            next();

        } catch (error) {
            // If the validation fails, 
            logger.error("Request body is invalid");
            res.status(400).json({
                message: "Invalid request body",
                success: false,
                error: error
            });
            
        }
    }
}

/**
 * 
 * @param schema - Zod schema to validate the request body
 * @returns - Middleware function to validate the request query params
 */
export const validateQueryParams = (schema: AnyZodObject) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {

            await schema.parseAsync(req.query);
            console.log("Query params are valid");
            next();

        } catch (error) {
            // If the validation fails, 

            res.status(400).json({
                message: "Invalid query params",
                success: false,
                error: error
            });
            
        }
    }
}