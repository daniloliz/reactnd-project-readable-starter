import React, { Component } from 'react';
import {
    Card, 
    CardHeader, 
    CardTitle, 
    CardText, 
    CardActions
} from 'material-ui/Card';
import { Divider, IconButton, RaisedButton, FontIcon } from 'material-ui';
import '../styles/App.css';

const Check = () => (<FontIcon className="material-icons" color="green" style={{ fontSize: 40 }}>done</FontIcon>);

class Posts extends Component {
    render() {
        return (
            <div className="Post">
                <Card>
                    <CardHeader
                        avatar={require("../images/avatar.jpg")}
                        titleStyle={{ fontFamily: "'Acme', sans-serif" }}
                        title={'Fulano de Tal'}
                        subtitle={<Check />}
                        subtitleStyle={{ paddingTop: 10 }}
                    />
                    <Divider />
                    <CardTitle
                        style={{ fontFamily: "'Acme', sans-serif" }}
                        title="Post 1"
                        subtitle="Sub post 1"
                    />
                    <CardText style={{ 
                        fontFamily: "'Acme', sans-serif", 
                        fontSize: 16
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    <Divider />
                    <CardActions>
                        <IconButton iconClassName="material-icons" tooltip="Up" >
                            keyboard_arrow_up
                        </IconButton>
                        <label>3</label>
                        <IconButton iconClassName="material-icons" tooltip="Down" >
                            keyboard_arrow_down
                        </IconButton>
                        <RaisedButton label="Delete" secondary className="Delete-button" />
                        <RaisedButton label="Coments" primary className="Delete-button" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default Posts;