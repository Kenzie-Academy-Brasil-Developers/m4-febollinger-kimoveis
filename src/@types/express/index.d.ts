import * as express from 'express'

declare global {
    namespace Express {
        interface Request {
            users: {
                id: number
                admin: boolean
            }
        }
    }
}