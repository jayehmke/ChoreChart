import React from 'react'
import { connect } from 'react-redux'
import {
  List,
  ListItem,
  Text,
  View,
  Container,
  Content,
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Form,
  Item,
  Input,
  Label
} from 'native-base'
// import Icon from 'react-native-vector-icons/Ionicons'
import { ActivityIndicator, Modal } from 'react-native'

import GoalActions from '../Redux/GoalRedux'
import styles from './Styles/GoalListStyles'

class GoalsList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
      modalVisible: false,
    }
  }

  // getGoalsFromApiAsync = () => {
  //   return fetch('https://facebook.github.io/react-native/movies.json')
  //     .then((response) => response.json())
  //     .then((responseJson) => {
  //       return responseJson.movies
  //     })
  //     .catch((error) => {
  //       console.error(error)
  //     })
  // }

  setModalVisible = (visible) => {
    this.setState({modalVisible: visible})
  }

  componentDidMount () {
    console.log('this.props', this.props)
    this.props.fetchGoals();
    // return fetch('http://localhost:3000/api/goal/list')
    //   .then((response) => response.json())
    //   .then((responseJson) => {
    //     this.setState({
    //       isLoading: false,
    //       dataSource: responseJson.goals,
    //     }, function () {
    //       // do something with new state
    //     })
    //   })
    //   .catch((error) => {
    //     console.error(error)
    //   })
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      )
    } else {
      return (
        <Container >
          <Header>
            <Left>
              <Button transparent onPress={() => this.context.drawer.open()}>
                <Icon name='ios-menu'/>
              </Button>
            </Left>
            <Body style={{flex: 3}}>
              <Title>Goals</Title>
            </Body>
            <Right>
              <Button transparent onPress={() => this.setModalVisible(true)}>
                <Icon name='ios-add'/>
              </Button>
            </Right>
          </Header>
          <Modal
            animationType={'slide'}
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {alert('Modal has been closed.')}}
          >
            <Content>
              <Header>
                <Left>
                  <Button transparent onPress={() => this.setModalVisible(false)}>
                    <Icon name='close'/>
                  </Button>
                </Left>
                <Body style={{flex: 3}}>
                  <Title>Add a New Goal</Title>
                </Body>
                <Right>
                  {/*<Button transparent onPress={() => this.context.drawer.open()}>*/}
                  {/*<Icon name='ios-add' />*/}
                  {/*</Button>*/}
                </Right>
              </Header>
              <Form style={styles.container}>
                <Item floatingLabel>
                  <Label>Goal Name</Label>
                  <Input />
                </Item>
                <Item floatingLabel>
                  <Label>Point Value</Label>
                  <Input keyboardType='number-pad'/>
                </Item>
                <Item floatingLabel last>
                  <Label>Goal Description</Label>
                  <Input numberOfLines={4} multiLine />
                </Item>
                <Button style={styles.button} block large primary><Text> Add Goal </Text></Button>
              </Form>

            </Content>
          </Modal>
          <Content style={styles.container}>
            <List dataArray={this.state.dataSource} renderRow={(item) =>
              <ListItem>
                <Text>{item.title}</Text>
                <Right>
                  <Text note>{item.state}</Text>
                </Right>
              </ListItem>
            }/>
          </Content>
        </Container>
      )
    }

  }
}
GoalsList.contextTypes = {drawer: React.PropTypes.object}
const mapStateToProps = (state) => {
  console.log('state', state)
  return {
    // ...redux state to props here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGoals: () => dispatch(GoalActions.goalRequest())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsList)
