import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export const ListHook = ({ list }) => {
    return (
        <Container>
            <Content>
                <List>

                    {list && list.length > 0 ? list.map((item, key) => {
                        return (<ListItem avatar>
                            <Left>
                                <Thumbnail source={{ uri: `https://picsum.photos/200/300?image=${item.id}` }} />
                            </Left>
                            <Body>
                                <Text>{item.author}</Text>
                                <Text note>
                                    {item.post_url}
                                </Text>
                            </Body>
                        </ListItem>)
                    }) :
                        <ListItem>
                            <Text>No data</Text>
                        </ListItem>}
                </List>
            </Content>
        </Container>
    );
}