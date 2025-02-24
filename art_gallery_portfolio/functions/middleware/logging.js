
const logApiCall = async (req,res,next) =>{
    try{
        const apiTimeElapsed = Date.now();
        res.on("finish", () => {
                const duration = Date.now() - apiTimeElapsed;
                console.log(`API request: ${req.originalUrl}`)
                console.log(`Date executed: ${apiTimeElapsed}`)
                console.log(`Time elapsed: ${duration}`)              
        })
        next();
    }catch(e){
        console.error(e);
    }
}

module.exports = logApiCall;