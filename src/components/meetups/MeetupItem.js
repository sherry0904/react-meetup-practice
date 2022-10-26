import { useContext, useEffect } from 'react'
// 需安裝 node-sass
import classes from './MeetupItem.module.scss'
import Card from '../ui/Card'
import FavoritesContext from '../../store/favorite-context';

function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if(itemIsFavorite) {
            favoritesCtx.removeFavorite(props.id);
        }else {
            favoritesCtx.addFavorite({
                id: props.id,
                title: props.title,
                description: props.description,
                image: props.image,
                address: props.address
            })
        }
    }

    useEffect(()=>{
        // console.log(props)  
        // console.log(favoritesCtx)  
    });

    return (
        <li className={classes.item} key={props.id}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>
                        {
                            itemIsFavorite ? "Remove from Favorite" : "To Favorites"
                        }
                    </button>
                </div>
            </Card>
        </li>
    )
}

export default MeetupItem