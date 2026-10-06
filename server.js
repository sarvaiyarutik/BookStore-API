
    import express from "express";
    import httpError from "./middleware/httpError.js";
    import dotenv from "dotenv";
    import connectDB from "./config/db.js"
    import bookRouter from "./router/bookRouter.js"

    dotenv.config({path:"./.env"});


    const app = express();
   app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/book", bookRouter);


    app.get("/",(req,res)=>{

        res.json("Hello from server");
    })

    app.use((req,res,next)=>{

    return  next(new httpError("request routs not found"))

    })

    app.use((error,req,res,next)=>{

        if(res.headersSent){

        return next(new httpError(error.message))  

        }

        return res.status(error.statusCode || 500).json({message:error.message || "internal server error"});
    })


    const port = process.env.PORT;

    async function serverStart(){

        try{

            const connect = await connectDB();

            if(!connect){
                throw new Error("connect db failed");
            }

            app.listen(port,(error)=>{

        

                console.log(`server running on port ${port}`)

            })

        }catch(error){

            throw new Error(error.message)
        }
        
    }

    serverStart();