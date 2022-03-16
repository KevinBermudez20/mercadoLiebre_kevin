const express=require('express');
const app=express();
const path=require('path');
const PORT= process.env.PORT || 3014;

app.use(express.static(path.join(__dirname,'public')));

app.listen(PORT, () => {
    console.log(`El servidor funciona con exito en el puerto ${PORT}`)
});

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})

app.get('/creaTuCuenta', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','crea-tu-cuenta.html'))
    
})
app.post('/', (req,res)=>{
    res.sendFile(path.join(__dirname,'views','home.html'))
})




