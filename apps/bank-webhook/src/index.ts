import express from "express"
import db from "@repo/db/client"

const app = express()


app.post("/",async(req,res)=>{
const paymentInformation = {
        token: req.body.token,
        userId: req.body.user_identifier,
        amount: req.body.amount
    };
await db.$transaction([
            db.balance.update({
                where: {
                    userid: Number(paymentInformation.userId)
                },
                data: {
                    amount: {
                        // You can also get this from your DB
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.update({
                where: {
                    token: paymentInformation.token
                }, 
                data: {
                    status: "Success",
                }
            })
        ]);

        res.json({
            message: "Captured"
        })

})