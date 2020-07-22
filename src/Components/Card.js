import React from 'react';
import '../Components/Card.css';
import Typography from '@material-ui/core/Typography';


const Card = (props)=> {
    return (
            <div className='transparent'>
                <Typography className="text" className="title" variant="h6">{props.sun}</Typography>
                <Typography  className="text"gutterbottom>Temperature</Typography>
               <Typography className="text"variant="h6" className="title">{props.at}</Typography>
                <Typography className="text"gutterbottom>Horizontal Wind Speed</Typography>
                <Typography className="text"variant="h6"className="title" >{props.hws}</Typography>
                <Typography className="text" gutterbottom>Pressure</Typography>
                <Typography className="text"variant="h6" className="title">{props.pre}</Typography>
                <Typography className="text" gutterbottom>Wind Direction</Typography>
                <Typography className="text"variant="h6" className="title">{props.wd}</Typography>
                <Typography className="text" gutterbottom>Season</Typography>
                <Typography className="text"variant="h6"className="title">{props.season}</Typography>
                <Typography className="text" gutterbottom>{props.lastutc}</Typography>
            </div>
        
    );
};

export default Card;

