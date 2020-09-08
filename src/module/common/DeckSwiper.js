import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon } from 'native-base';

    export const DeckSwiperHook =({cards})=>{
    return (
      
        <View>
          <DeckSwiper
            dataSource={cards}
            renderEmpty={() =>
              <View style={{ alignSelf: "center" }}>
                <Text>Over</Text>
              </View>
            }
            renderItem={item =>
              <Card 
            //   style={{ elevation: 3 }}
              >
                <CardItem>
                  <Left>
                  <Thumbnail source={{uri: `https://picsum.photos/200/200?image=${item.id}`}} />
                    <Body>
                      <Text>{item.author}</Text>
                      {/* <Text note>NativeBase</Text> */}
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ height: 200, flex: 1 }} source={{uri:`https://picsum.photos/200/200?image=${item.id}`}} />
                </CardItem>
                
              </Card>
            }
          />
        </View>
    );
}