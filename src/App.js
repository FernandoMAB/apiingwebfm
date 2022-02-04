import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function App() {

  const useStyles = makeStyles({
    root: {
      maxWidth: "80%",
      margin: "auto",
      marginTop: 18,
      backgroundColor: "#FFFDDE"

    },
    media: {
      height: "400px"
    }
  });
  const classes = useStyles();
  const url = 'https://api.nasa.gov/planetary/apod?api_key=ZgxIQh1PJz1TmYdDZDUraUsIZtLXuqLeL0twp39V'
  const [todo, setTodos] = useState();

  const consumirAPI = async () =>{
    
    const response = await fetch(url)
    const responseJson = await response.json();

    setTodos(responseJson)
    console.log(responseJson)
  }

  useEffect(() => {
    consumirAPI();
  },[]);

  return (
    <div className="App">
      { todo ? (

    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={todo.url}
        title={todo.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" color = "#FFCBCB">
          {todo.title}
        </Typography>
        <Typography gutterBottom variant="h6" component="p" >
         {todo.date}
        </Typography>
          <Typography variant="body1" color="textSecondary" component="p">
          {todo.explanation}
        </Typography>

        <Typography variant="body2" color="textSecondary" component="p">
        Copyright: {todo.copyright}
        </Typography>

      </CardContent>
    </Card>
          
      ): 'Cargando ...'
      }
    </div>
  );
}

export default App;
