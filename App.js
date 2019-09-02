import React from "react";
import { StyleSheet, View, Image } from "react-native";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Footer,
  FooterTab
} from "native-base";
export default function App() {
  return (
    <Container>
      <Header>
        <Text style={styles.textStyle}>Welcome Dude!</Text>
      </Header>
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: "Image URL" }} />
              <Body>
                <Text>Even this doggo gets more likes than you. :)</Text>
                <Text note>p.s. LOL</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri: "https://i.ytimg.com/vi/eLLZd7fW244/maxresdefault.jpg"
              }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
        <Footer>
          <Left>
            <Button transparent>
              <Icon active name="thumbs-up" />
              <Text>12 Likes</Text>
            </Button>
          </Left>
          <Body>
            <Button transparent>
              <Icon active name="chatbubbles" />
              <Text>4 Comments</Text>
            </Button>
          </Body>
          <Right>
            <Text>11h ago</Text>
          </Right>
        </Footer>
      </Content>

      <Footer>
        <FooterTab>
          <Button>
            <Icon name="apps" />
          </Button>
          <Button>
            <Icon name="camera" />
          </Button>
          <Button active>
            <Icon active name="navigate" />
          </Button>
          <Button>
            <Icon name="person" />
          </Button>
        </FooterTab>
      </Footer>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  textStyle: { color: "black", fontWeight: "bold", fontSize: 30 }
});
