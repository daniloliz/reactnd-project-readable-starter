import React, { Component } from 'react';
import Posts from './Posts';
import { Card, CardText } from 'material-ui/Card';
import Badge from 'material-ui/Badge';
import { GridList } from 'material-ui/GridList';
import '../styles/App.css';

const style = {
    gridList: { 
        display: '-webkit-inline-box', 
        width: 500,
        flexWrap: 'initial',
        textAlign: 'center',
        textTransform: 'capitalize',
        marginLeft: '25%',
        marginRight: '40%',
        marginTop: 30
    },
    card: {
        margin: '0px 0px 0px 0px',
        fontFamily: "'Acme', sans-serif",
        padding: 20
    }
}

class Home extends Component {
    state = {
        posts: []
    }
    render() {
        return (
            <div>
                <GridList 
                    style={style.gridList}>
                    {this.props.categories.map((categorie, index) => (
                        <Badge
                            key={index}
                            badgeContent={4}
                            primary={true}
                        >
                            <Card style={style.card}>
                                <CardText style={{ fontSize: 20 }}>
                                    {`${categorie.name}`}
                                </CardText>
                            </Card>
                        </Badge>
                    ))}
                </GridList>
                <Posts />
            </div>
        )
    }
}

export default Home;