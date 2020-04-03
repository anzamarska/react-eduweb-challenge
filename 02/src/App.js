import React from 'react';
import ListWrapper from './components/ListWrapper/ListWrapper';
import './index.css';
import Form from './components/Form/Form';

const initialStateItems = [
    {
        image: 'https://www.tapeciarnia.pl/tapety/normalne/195142_niedzwiedz_lapa_woda.jpg',
        name: 'Duży Niedźwiedzio',
        description: 'Trader kawy stycznia 2020, krewetkowo tempurowy sushi master, lubi toczyć kule i wygrywa pociągi.',
        twitterLink: 'https://twitter.com/dan_abramov',
    },
    {
        image: 'https://4.bp.blogspot.com/-1_Z4xIZOrbM/ToP0IoHli_I/AAAAAAAABsU/-6q-sg91ZVo/s1600/cute-bear-images-2.jpg',
        name: 'Misia',
        description: 'Trochę psycholoszka, propagująca fit życie Misiów, dbająca o rozwój słownictwa i skilli miękkich, podobnie jak Duży Miś lubi kawę. Bardzo.',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyW8EDrPDIWWUrrF5RTr47Jtn-jRp_3IK9pGcVQ_59xmGjpjJd&usqp=CAU',
        name: 'Don Niedźwiedź Corlene',
        description: 'Zarządca bielskich posiadłości, ferm kurczaków i coś tam coś tam kurtki Atomica',
        twitterLink: 'https://twitter.com/ryanflorence',
    },
    
];

class App extends React.Component {

    state = {
        items: [...initialStateItems], 
    }

    addItem = (e) => {
        e.preventDefault();
        
        const newItem = {
            name: e.target[0].value,
            twitterLink: e.target[1].value,
            image: e.target[2].value,
            description: e.target[3].value,
        }
        this.setState(prevState => ({
            items: [...prevState.items, newItem],
        }));

        e.target.reset();
    }

    render() {
        return (

            <div>
                <ListWrapper
                items={this.state.items} 
                />
                <Form submitFn={this.addItem}/>
            </div> 
        )
    }
    
}
export default App;
