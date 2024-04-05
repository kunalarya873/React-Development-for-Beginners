import { Component } from "react";
import './card.styles.css';

class Card extends Component{
    render(){ 
        const { monster } = this.props;
        return(
            <div className="card-list">
                {monster.map((monster) => {
                    return <Card monster={monster} />
                })}
            </div>
            );
    };
};
export default Card;