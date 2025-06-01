import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css"
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}) {
    // const init_image = "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainUrl = "https://tse1.mm.bing.net/th?id=OIP.a5VoJoi1GkgpVGDVJkjVDgHaE8&pid=Api&P=0&h=180"
    const hotUrl = "https://tse4.mm.bing.net/th?id=OIP.XTCqIm-tjtuFe9Fy9c53VgHaEo&pid=Api&P=0&h=180";
    const coldUrl = "https://tse1.mm.bing.net/th?id=OIP.f08aHvDlOLPrbOn8Eoj1HgHaFj&pid=Api&P=0&h=180"


    return (
        <div className="InfoBox">
            <h3>Weather Info</h3>
            <div className='Card'>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={info.humidity>80 ? rainUrl : info.temp > 20 ? hotUrl : coldUrl}
                    title="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <b>{info.city} {info.humidity>80 ? <ThunderstormIcon/> : info.temp > 20 ? <SunnyIcon/> : <AcUnitIcon/>} </b>
                    </Typography>
                    <Typography variant="body2"  color="text.secondary" component={"span"}>
                        <p>Temperature = {info.temp}&deg;C</p>
                        <p>Humidity = {info.humidity}</p>
                        <p>Min Temp = {info.tempMin}&deg;C</p>
                        <p>Max Temp = {info.tempMax}&deg;C</p>
                        <p>The weather can be described as <b>{info.weather}</b> and feels like {info.feelsLike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    )
}